import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wezuzrbne.css';
import '../../css/z/zdvu-_b1d.css';
import '../../css/h/hsd4w5bnj.css';
import '../../css/h/hcuhg6bae.css';
import '../../css/n/npd1b2btd.css';
import '../../css/p/pskyktbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wezuzrbne"/><path class="zdvu-_b1d"/><path class="hsd4w5bnj"/><path class="hcuhg6bae"/><path class="npd1b2btd"/><path class="pskyktbhs"/></g>`,
		"fallback": "icon-park:virgo",
	});
}

export default Component;
