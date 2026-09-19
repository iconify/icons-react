import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxejd1xoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxejd1xoc"/>`,
		"fallback": "boxicons:treasure-chest",
	});
}

export default Component;
