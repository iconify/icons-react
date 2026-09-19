import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qms-c1bqk.css';
import '../../css/l/lpwhomvqt.css';
import '../../css/k/kvmx2ccby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qms-c1bqk"/><path class="lpwhomvqt"/><path class="kvmx2ccby"/></g>`,
		"fallback": "hugeicons:loyalty-card",
	});
}

export default Component;
