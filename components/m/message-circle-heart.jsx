import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/s/sdzbjqbjm.css';
import '../../css/s/sewtrvbyb.css';
import '../../css/h/hfg9ykbue.css';
import '../../css/e/eda20jzdt.css';
import '../../css/m/mibyckp-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="sdzbjqbjm"/><path class="sewtrvbyb"/><path class="hfg9ykbue"/><path class="eda20jzdt"/><path class="mibyckp-d"/></g>`,
		"fallback": "withicons-retro:message-circle-heart",
	});
}

export default Component;
