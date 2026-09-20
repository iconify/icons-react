import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgfxe3bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgfxe3bsy"/>`,
		"fallback": "keyline-icons:square-align-offset-top-sharp-fill",
	});
}

export default Component;
