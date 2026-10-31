import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jsm0pzpjg.css';
import '../../css/m/m23iwwwwq.css';
import '../../css/w/wwsorabjx.css';
import '../../css/d/dtfvnybpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jsm0pzpjg wm-shadow"/><path class="m23iwwwwq wm-shadow"/><path class="wwsorabjx"/><path class="dtfvnybpp"/></g>`,
		"fallback": "withicons-brutal:panel-right",
	});
}

export default Component;
