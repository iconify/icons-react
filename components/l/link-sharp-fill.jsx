import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvg0d3b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvg0d3b4d"/>`,
		"fallback": "keyline-icons:link-sharp-fill",
	});
}

export default Component;
