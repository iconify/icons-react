import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjwarlp5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjwarlp5g"/>`,
		"fallback": "selfhst:memories-dark",
	});
}

export default Component;
