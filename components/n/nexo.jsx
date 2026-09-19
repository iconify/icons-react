import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6-hb5m7m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6-hb5m7m"/>`,
		"fallback": "cryptocurrency:nexo",
	});
}

export default Component;
