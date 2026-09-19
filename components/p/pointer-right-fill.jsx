import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppxr7-a6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ppxr7-a6k"/>`,
		"fallback": "akar-icons:pointer-right-fill",
	});
}

export default Component;
