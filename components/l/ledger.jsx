import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywl-3ftmc.css';
import '../../css/d/dpuh-7mvn.css';
import '../../css/l/lt2ucxr_a.css';
import '../../css/u/u5ivydbmj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/han-2acmn.css';
import '../../css/c/ctl6dbbkh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywl-3ftmc"/><path class="dpuh-7mvn"/><path class="lt2ucxr_a"/><path class="u5ivydbmj"/><g class="ij2x_72vy"><path class="han-2acmn"/><path class="ctl6dbbkh"/></g>`,
		"fallback": "openmoji:ledger",
	});
}

export default Component;
