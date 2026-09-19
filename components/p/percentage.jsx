import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tuvu8wjin.css';
import '../../css/q/qbegytbhw.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="tuvu8wjin"/><circle class="qbegytbhw"/><path class="opakkwbyw"/></g>`,
		"fallback": "icon-park-outline:percentage",
	});
}

export default Component;
