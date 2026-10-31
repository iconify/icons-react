import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uw8co3jlg.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/impm-82ll.css';
import '../../css/h/hoyac7t2b.css';
import '../../css/r/rczjqgbnt.css';
import '../../css/m/mwbsu6bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uw8co3jlg wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="impm-82ll"/><path class="hoyac7t2b"/><path class="rczjqgbnt"/><path class="mwbsu6bij wm-s"/></g>`,
		"fallback": "withicons-retro:user-check",
	});
}

export default Component;
