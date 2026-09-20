import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpa2y2bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hpa2y2bip"/>`,
		"fallback": "keyline-icons:square-arrow-up-right-sharp-fill",
	});
}

export default Component;
