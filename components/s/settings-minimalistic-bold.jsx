import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1bnrlw0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p1bnrlw0q"/>`,
		"fallback": "solar:settings-minimalistic-bold",
	});
}

export default Component;
