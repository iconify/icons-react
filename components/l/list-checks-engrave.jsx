import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oa29y7bly.css';
import '../../css/a/a1wq3abcj.css';
import '../../css/m/m_g4t8b0d.css';
import '../../css/q/qb8r96btl.css';
import '../../css/o/o54qorbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oa29y7bly wm-k"/><path class="a1wq3abcj wm-a"/><path class="m_g4t8b0d wm-shadow"/><path class="qb8r96btl wm-k"/><path class="o54qorbnl wm-a"/></g>`,
		"fallback": "withicons:list-checks-engrave",
	});
}

export default Component;
