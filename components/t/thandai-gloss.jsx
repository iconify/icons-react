import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/metc_zb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="metc_zb9h"/>`,
		"fallback": "withicons:thandai-gloss",
	});
}

export default Component;
