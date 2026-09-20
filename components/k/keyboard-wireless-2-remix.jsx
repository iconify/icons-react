import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcsr3ia2n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcsr3ia2n"/>`,
		"fallback": "streamline:keyboard-wireless-2-remix",
	});
}

export default Component;
