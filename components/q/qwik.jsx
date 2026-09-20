import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of9o9pahi.css';
import '../../css/r/rq1sw1bve.css';
import '../../css/d/dfa3o1blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of9o9pahi"/><path class="rq1sw1bve"/><path class="dfa3o1blh"/>`,
		"fallback": "material-icon-theme:qwik",
	});
}

export default Component;
