import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkgdzhhhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkgdzhhhp"/>`,
		"fallback": "solar:link-square-bold",
	});
}

export default Component;
