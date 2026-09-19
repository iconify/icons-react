import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo11wvb4j.css';
import '../../css/h/htivmtpeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo11wvb4j"/><path class="htivmtpeg"/>`,
		"fallback": "boxicons:shape-trim-alt-filled",
	});
}

export default Component;
