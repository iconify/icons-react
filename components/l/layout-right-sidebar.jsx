import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgk3cb3nm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgk3cb3nm"/>`,
		"fallback": "streamline-flex:layout-right-sidebar",
	});
}

export default Component;
