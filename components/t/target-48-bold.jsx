import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/k/k6ocuztoi.css';
import '../../css/q/qbfpednqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="k6ocuztoi"/><path class="qbfpednqz"/>`,
		"fallback": "energy-icons:target-48-bold",
	});
}

export default Component;
