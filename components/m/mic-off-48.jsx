import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apcghhbso.css';
import '../../css/r/r2-klm-1b.css';
import '../../css/a/azjk1obih.css';
import '../../css/y/ytt933dwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apcghhbso"/><path class="r2-klm-1b"/><path class="azjk1obih"/><path class="ytt933dwa"/>`,
		"fallback": "energy-icons:mic-off-48",
	});
}

export default Component;
