import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8sbyybhx.css';
import '../../css/d/di5o6abzw.css';
import '../../css/t/tfb53697o.css';
import '../../css/y/ysanb1o8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8sbyybhx"/><path class="di5o6abzw"/><path class="tfb53697o"/><path class="ysanb1o8e"/>`,
		"fallback": "fontisto:qrcode",
	});
}

export default Component;
