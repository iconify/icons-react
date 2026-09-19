import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqz26c-5m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqz26c-5m"/>`,
		"fallback": "fa7-solid:virus-slash",
	});
}

export default Component;
