import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8jg3rppc.css';
import '../../css/x/xh_480b1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8jg3rppc"/><path class="xh_480b1f"/>`,
		"fallback": "energy-icons:kettle-48-bold",
	});
}

export default Component;
