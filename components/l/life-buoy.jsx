import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mznxhcbho.css';
import '../../css/l/ljxms6bnh.css';
import '../../css/f/f6b10qorm.css';
import '../../css/m/m05aqotso.css';
import '../../css/k/k8leyfqeo.css';
import '../../css/a/aoioyibma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mznxhcbho"/><path class="ljxms6bnh"/><path class="f6b10qorm"/><path class="m05aqotso"/><path class="k8leyfqeo"/><path class="aoioyibma"/></g>`,
		"fallback": "matita:life-buoy",
	});
}

export default Component;
