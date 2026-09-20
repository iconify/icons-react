import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_o34ob-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_o34ob-y"/>`,
		"fallback": "keyline-icons:square-chevrons-right-sharp-fill",
	});
}

export default Component;
