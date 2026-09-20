import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/c/c_dm05blc.css';
import '../../css/a/aq5i5kwsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="c_dm05blc"/><path class="aq5i5kwsa"/></g>`,
		"fallback": "solar:round-sort-horizontal-linear",
	});
}

export default Component;
