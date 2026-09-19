import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj_jthbsa.css';
import '../../css/w/w81_4cfys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj_jthbsa"/><path class="w81_4cfys"/>`,
		"fallback": "eva:pie-chart-fill",
	});
}

export default Component;
