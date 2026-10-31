import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fl78u9b5f.css';
import '../../css/v/v38uq9ztf.css';
import '../../css/m/m41g8eioq.css';
import '../../css/g/g71l8mfcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fl78u9b5f"/><path class="v38uq9ztf wm-shine"/><path class="m41g8eioq wm-k"/><path class="g71l8mfcw wm-a"/></g>`,
		"fallback": "withicons-kawaii:rocket",
	});
}

export default Component;
