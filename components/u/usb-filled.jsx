import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzm9y0mnu.css';
import '../../css/n/nxx7kub6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzm9y0mnu"/><path clip-rule="evenodd" class="nxx7kub6k"/>`,
		"fallback": "bitcoin-icons:usb-filled",
	});
}

export default Component;
