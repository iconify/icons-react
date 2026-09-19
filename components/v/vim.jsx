import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kozflou_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kozflou_y"/>`,
		"fallback": "cib:vim",
	});
}

export default Component;
