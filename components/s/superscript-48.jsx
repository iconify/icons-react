import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goq34d2ro.css';
import '../../css/j/jqlujo0tq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goq34d2ro"/><path class="jqlujo0tq"/>`,
		"fallback": "energy-icons:superscript-48",
	});
}

export default Component;
