import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3nqpne1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3nqpne1g"/>`,
		"fallback": "selfhst:noodle-gallery-dark",
	});
}

export default Component;
