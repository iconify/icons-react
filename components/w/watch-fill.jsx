import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgz6b35js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgz6b35js"/>`,
		"fallback": "keyline-icons:watch-fill",
	});
}

export default Component;
