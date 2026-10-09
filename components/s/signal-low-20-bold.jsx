import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsw7geboz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsw7geboz"/>`,
		"fallback": "energy-icons:signal-low-20-bold",
	});
}

export default Component;
