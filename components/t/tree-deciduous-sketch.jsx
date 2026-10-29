import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m_cnwlbxs.css';
import '../../css/p/pk7vs7bdt.css';
import '../../css/c/cp8-p4b5u.css';
import '../../css/c/cbr2lvb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m_cnwlbxs"/><path class="pk7vs7bdt wm-a"/><path class="cp8-p4b5u wm-k"/><path class="cbr2lvb4c wm-a"/></g>`,
		"fallback": "withicons:tree-deciduous-sketch",
	});
}

export default Component;
