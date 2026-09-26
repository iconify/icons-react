import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebywk9ozr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebywk9ozr"/>`,
		"fallback": "solar:star-rings-bold",
	});
}

export default Component;
