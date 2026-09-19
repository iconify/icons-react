import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz_wyfb8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz_wyfb8d"/>`,
		"fallback": "cryptocurrency:snm",
	});
}

export default Component;
