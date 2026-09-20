import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x85s4hwda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x85s4hwda"/>`,
		"fallback": "selfhst:lodestone-dark",
	});
}

export default Component;
