import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tlqlazlox.css';
import '../../css/x/x6a9ejb1u.css';
import '../../css/b/bcc9m6h1q.css';
import '../../css/c/cjaxhhrrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tlqlazlox"/><path class="wm-a x6a9ejb1u"/><path class="bcc9m6h1q wm-a"/><path class="cjaxhhrrf"/></g>`,
		"fallback": "withicons:mithai-box-duo",
	});
}

export default Component;
