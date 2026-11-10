import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/ekm2qsksn.css';
import '../../css/i/is8s_6bwb.css';
import '../../css/f/fgwqzpbao.css';
import '../../css/u/u4q1knbns.css';
import '../../css/q/qdk4x6m_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ekm2qsksn"/><path class="is8s_6bwb"/><path class="fgwqzpbao"/><path class="u4q1knbns"/><path class="qdk4x6m_r"/></g>`,
		"fallback": "matita:prices-menu",
	});
}

export default Component;
