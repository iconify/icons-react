import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrb0n9bgf.css';
import '../../css/r/rzr08ebez.css';
import '../../css/j/jzzafn9vl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrb0n9bgf"/><path class="rzr08ebez"/><path class="jzzafn9vl"/>`,
		"fallback": "energy-icons:org-chart-48",
	});
}

export default Component;
