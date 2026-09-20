import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4m_wubhn.css';
import '../../css/m/mdl65tfqc.css';
import '../../css/z/zaqqq7anp.css';
import '../../css/w/we2hzablk.css';
import '../../css/d/d2emwfb-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4m_wubhn"/><path class="mdl65tfqc"/><path class="zaqqq7anp"/><path class="we2hzablk"/><path class="d2emwfb-d"/></g>`,
		"fallback": "streamline-color:speaker-1",
	});
}

export default Component;
