import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mdbcilbso.css';
import '../../css/q/qonh3zbpu.css';
import '../../css/k/kj5sz9cps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mdbcilbso"/><path class="qonh3zbpu"/><path class="kj5sz9cps"/></g>`,
		"fallback": "hugeicons:mail-edit-02",
	});
}

export default Component;
