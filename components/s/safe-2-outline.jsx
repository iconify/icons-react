import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct3j1ul3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct3j1ul3s"/>`,
		"fallback": "solar:safe-2-outline",
	});
}

export default Component;
