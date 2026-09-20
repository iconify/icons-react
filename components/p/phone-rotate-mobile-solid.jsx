import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li1w34b2h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li1w34b2h"/>`,
		"fallback": "streamline-flex:phone-rotate-mobile-solid",
	});
}

export default Component;
