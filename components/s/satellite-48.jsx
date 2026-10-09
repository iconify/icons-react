import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le28xpbbv.css';
import '../../css/o/o8rtphxyj.css';
import '../../css/c/czocnxqcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le28xpbbv"/><path class="o8rtphxyj"/><path class="czocnxqcc"/>`,
		"fallback": "energy-icons:satellite-48",
	});
}

export default Component;
