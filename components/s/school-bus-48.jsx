import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncwlnq5lf.css';
import '../../css/i/it1p7fg9r.css';
import '../../css/x/xqp68wtip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncwlnq5lf"/><path class="it1p7fg9r"/><path class="xqp68wtip"/>`,
		"fallback": "energy-icons:school-bus-48",
	});
}

export default Component;
