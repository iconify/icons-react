import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j8tqhzbcv.css';
import '../../css/t/t3h6qok3v.css';
import '../../css/s/s7eau4b8t.css';
import '../../css/h/hnhscoboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j8tqhzbcv"/><circle class="t3h6qok3v"/><path class="s7eau4b8t"/><path class="hnhscoboi"/></g>`,
		"fallback": "hugeicons:projector-01",
	});
}

export default Component;
