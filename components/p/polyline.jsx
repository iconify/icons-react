import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_lo7bgx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs_lo7bgx"/>`,
		"fallback": "wpf:polyline",
	});
}

export default Component;
