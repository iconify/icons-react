import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv0npubkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv0npubkc"/>`,
		"fallback": "flowbite:restore-window-outline",
	});
}

export default Component;
