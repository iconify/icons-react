import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd3tncc0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd3tncc0j"/>`,
		"fallback": "pixelarticons:pnpm-solid",
	});
}

export default Component;
