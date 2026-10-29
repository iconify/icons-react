import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eziu-6b2h.css';
import '../../css/o/otle9ccjv.css';
import '../../css/i/i-v124nln.css';
import '../../css/z/z3fy_envj.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/ty9mbdqxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eziu-6b2h wm-k"/><path class="otle9ccjv wm-a"/><path class="i-v124nln wm-shadow"/><path class="wm-k z3fy_envj"/><path class="wm-a wp31-1bdq"/><path class="ty9mbdqxq wm-k"/></g>`,
		"fallback": "withicons:paste-engrave",
	});
}

export default Component;
