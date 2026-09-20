import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smrup5bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smrup5bzn"/>`,
		"fallback": "keyline-icons:picture-in-picture-sharp",
	});
}

export default Component;
