import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5hk3yb1p.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5hk3yb1p"/>`,
		"fallback": "lineicons:tower-broadcast-1",
	});
}

export default Component;
