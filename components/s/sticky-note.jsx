import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oct5emb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oct5emb_d"/>`,
		"fallback": "pixelarticons:sticky-note",
	});
}

export default Component;
