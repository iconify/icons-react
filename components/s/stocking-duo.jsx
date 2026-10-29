import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zzgndnbwj.css';
import '../../css/s/s0u551bts.css';
import '../../css/s/shvumy_dn.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/m/msfvzeb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zzgndnbwj"/><path class="s0u551bts wm-a"/><path class="shvumy_dn wm-a"/><path class="o25cc4zjh"/><path class="msfvzeb4q wm-a"/></g>`,
		"fallback": "withicons:stocking-duo",
	});
}

export default Component;
