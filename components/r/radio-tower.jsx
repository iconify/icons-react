import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjf9bubqw.css';
import '../../css/v/vvi2seh-x.css';
import '../../css/m/muuu4qbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12.07 8.32)" class="jjf9bubqw"/><circle transform="rotate(90 12.07 8.32)" class="vvi2seh-x"/><path class="muuu4qbyh"/></g>`,
		"fallback": "andrsrxn:radio-tower",
	});
}

export default Component;
