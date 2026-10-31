import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/as676sxjh.css';
import '../../css/w/w0jia7bjw.css';
import '../../css/g/gjs20_qbp.css';
import '../../css/m/m_gu8i8bb.css';
import '../../css/e/es0jvzbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="as676sxjh"/><path class="w0jia7bjw"/><path class="gjs20_qbp wm-shine"/><path class="m_gu8i8bb"/><path class="es0jvzbqk"/></g>`,
		"fallback": "withicons-kawaii:stop",
	});
}

export default Component;
