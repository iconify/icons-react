import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tstyxkmej.css';
import '../../css/k/k3qcgxbnp.css';
import '../../css/i/iw07ocizs.css';
import '../../css/f/fmvl9jb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tstyxkmej wm-k"/><path class="k3qcgxbnp wm-shadow"/><path class="iw07ocizs wm-k"/><path class="fmvl9jb-y wm-a"/></g>`,
		"fallback": "withicons:refrigerator-engrave",
	});
}

export default Component;
