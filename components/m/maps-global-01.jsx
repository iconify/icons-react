import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d62-ihjob.css';
import '../../css/l/l1et6yd0q.css';
import '../../css/z/zcvwxrbvo.css';
import '../../css/j/jgug-rbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d62-ihjob"/><path class="l1et6yd0q"/><path class="zcvwxrbvo"/><path class="jgug-rbau"/></g>`,
		"fallback": "hugeicons:maps-global-01",
	});
}

export default Component;
