import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw-szkbrd.css';
import '../../css/f/f96gcgbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw-szkbrd"/><path clip-rule="evenodd" class="f96gcgbma"/>`,
		"fallback": "solar:transmission-bold-duotone",
	});
}

export default Component;
