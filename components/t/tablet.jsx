import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz5ncab1s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz5ncab1s"/>`,
		"fallback": "zondicons:tablet",
	});
}

export default Component;
