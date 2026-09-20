import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_e3mtb6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_e3mtb6o"/>`,
		"fallback": "streamline-flex:page-setting",
	});
}

export default Component;
