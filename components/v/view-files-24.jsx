import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpy40urxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpy40urxy"/>`,
		"fallback": "octicon:view-files-24",
	});
}

export default Component;
