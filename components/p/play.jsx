import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rm-j65frv.css';
import '../../css/t/txfh-5blw.css';
import '../../css/t/tdfzwrb2o.css';
import '../../css/v/vzoejcc3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rm-j65frv wm-shadow"/><path class="txfh-5blw wm-shadow"/><path class="tdfzwrb2o"/><path class="vzoejcc3a"/></g>`,
		"fallback": "withicons-brutal:play",
	});
}

export default Component;
