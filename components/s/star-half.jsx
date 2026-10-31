import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m_1eq48tk.css';
import '../../css/u/uvir12b9m.css';
import '../../css/h/ho994gbvl.css';
import '../../css/k/kb_zc_bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m_1eq48tk wm-shadow"/><path class="uvir12b9m wm-shadow"/><path class="ho994gbvl"/><path class="kb_zc_bwq"/></g>`,
		"fallback": "withicons-brutal:star-half",
	});
}

export default Component;
