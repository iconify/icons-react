import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjky15dmp.css';
import '../../css/y/ysm42ubfa.css';
import '../../css/q/q4n41z0ix.css';
import '../../css/p/psv5noyru.css';
import '../../css/q/qhh3n_bdt.css';
import '../../css/o/o40j11b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cjky15dmp wm-k"/><path class="wm-a ysm42ubfa"/><path class="q4n41z0ix wm-shadow"/><path class="psv5noyru wm-k"/><path class="qhh3n_bdt wm-k"/><path class="o40j11b-z wm-a"/></g>`,
		"fallback": "withicons:language-engrave",
	});
}

export default Component;
