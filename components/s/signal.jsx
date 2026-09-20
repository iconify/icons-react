import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7642b9dp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7642b9dp"/>`,
		"fallback": "oi:signal",
	});
}

export default Component;
