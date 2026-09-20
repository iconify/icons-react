import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyayndb2t.css';
import '../../css/w/wxcgd_r6i.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/m/m_72sd0-s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xyayndb2t"/><path class="wxcgd_r6i"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="m_72sd0-s"/></g>`,
		"fallback": "openmoji:regional-indicator-c",
	});
}

export default Component;
