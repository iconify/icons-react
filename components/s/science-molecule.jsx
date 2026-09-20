import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz28-6bjy.css';
import '../../css/i/i6q7t-eyn.css';
import '../../css/z/zzjg_ttrw.css';
import '../../css/a/a3b31-ezn.css';
import '../../css/f/f-b3drkzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz28-6bjy"/><path class="i6q7t-eyn"/><path class="zzjg_ttrw"/><path class="a3b31-ezn"/><path class="f-b3drkzh"/></g>`,
		"fallback": "streamline-ultimate-color:science-molecule",
	});
}

export default Component;
