import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_bh4bwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz_bh4bwo"/>`,
		"fallback": "bi:pie-chart-fill",
	});
}

export default Component;
