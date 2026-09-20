import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_4yhpbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_4yhpbhw"/>`,
		"fallback": "keyline-icons:tablet-vertical-sharp-fill",
	});
}

export default Component;
