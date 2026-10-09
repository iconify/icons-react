import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf73wyzyl.css';
import '../../css/m/m3ucd-ekr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf73wyzyl"/><path class="m3ucd-ekr"/>`,
		"fallback": "energy-icons:towels-48",
	});
}

export default Component;
