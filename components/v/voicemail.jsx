import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h1ey343tu.css';
import '../../css/h/hnb8fcyso.css';
import '../../css/x/xqp2_ltmk.css';
import '../../css/y/y5-fxdbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h1ey343tu"/><path class="hnb8fcyso"/><path class="xqp2_ltmk"/><path class="y5-fxdbyk"/></g>`,
		"fallback": "withicons-bauhaus:voicemail",
	});
}

export default Component;
