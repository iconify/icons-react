import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc83huhip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc83huhip"/>`,
		"fallback": "solar:list-arrow-up-minimalistic-bold",
	});
}

export default Component;
