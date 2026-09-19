import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2mnm_bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2mnm_bpc"/>`,
		"fallback": "boxicons:magic-wand-filled",
	});
}

export default Component;
