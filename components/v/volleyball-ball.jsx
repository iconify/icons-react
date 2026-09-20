import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/y/y8pbiacnl.css';
import '../../css/q/qsplrnehy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="y8pbiacnl"/><path class="qsplrnehy"/></g>`,
		"fallback": "streamline-ultimate:volleyball-ball",
	});
}

export default Component;
