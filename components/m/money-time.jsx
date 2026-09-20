import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/n/nvk7ukbau.css';
import '../../css/d/d7_g8gbsv.css';
import '../../css/z/zyhn94bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="nvk7ukbau"/><path class="d7_g8gbsv"/><path class="zyhn94bau"/></g>`,
		"fallback": "reicon:money-time",
	});
}

export default Component;
