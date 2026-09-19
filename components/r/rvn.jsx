import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugi7pebyq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugi7pebyq"/>`,
		"fallback": "cryptocurrency:rvn",
	});
}

export default Component;
