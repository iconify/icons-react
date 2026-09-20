import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpl68-y4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpl68-y4b"/>`,
		"fallback": "solar:maximize-square-2-bold",
	});
}

export default Component;
