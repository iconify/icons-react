import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2oqqhw1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2oqqhw1r"/>`,
		"fallback": "coolicons:mobile-button-fill-round",
	});
}

export default Component;
