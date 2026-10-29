import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/molcvsbva.css';
import '../../css/w/wl_z7s7lf.css';
import '../../css/x/xrey7damx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="molcvsbva wm-k"/><path class="wl_z7s7lf wm-a"/><path class="wm-a xrey7damx"/>`,
		"fallback": "withicons-bauhaus:scan-face",
	});
}

export default Component;
