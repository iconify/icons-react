import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_jsbb1dt.css';
import '../../css/n/noh410t_c.css';
import '../../css/z/zz74stmfh.css';
import '../../css/f/fmh8jmarv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_jsbb1dt"/><path class="noh410t_c"/><path class="zz74stmfh"/><path class="fmh8jmarv"/></g>`,
		"fallback": "streamline-ultimate-color:upload-circle",
	});
}

export default Component;
