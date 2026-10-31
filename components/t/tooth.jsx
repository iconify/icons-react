import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e_cl025ue.css';
import '../../css/c/ciiq510ah.css';
import '../../css/d/d5mkv-0fy.css';
import '../../css/w/wjf1ikbgx.css';
import '../../css/x/xupbmfuvg.css';
import '../../css/b/bh06cp5bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="e_cl025ue"/><path class="ciiq510ah"/><path class="d5mkv-0fy wm-shine"/><path class="wjf1ikbgx"/><path class="xupbmfuvg"/><path class="bh06cp5bk"/></g>`,
		"fallback": "withicons-kawaii:tooth",
	});
}

export default Component;
