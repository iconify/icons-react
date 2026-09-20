import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/estk-xb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="estk-xb6j"/>`,
		"fallback": "keyline-icons:palette-sharp-fill",
	});
}

export default Component;
