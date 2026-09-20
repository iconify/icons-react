import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vey5eii8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vey5eii8l"/>`,
		"fallback": "selfhst:spacepad-dark",
	});
}

export default Component;
