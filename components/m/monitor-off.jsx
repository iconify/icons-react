import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ytiitwb2g.css';
import '../../css/m/mw76hgbhi.css';
import '../../css/x/xmoxvtbak.css';
import '../../css/e/elgjjibcr.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ytiitwb2g"/><path class="mw76hgbhi wm-shadow"/><path class="xmoxvtbak"/><path class="elgjjibcr"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:monitor-off",
	});
}

export default Component;
