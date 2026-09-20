import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfyvv4ilo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfyvv4ilo"/>`,
		"fallback": "streamline-sharp:shipping-box-1-remix",
	});
}

export default Component;
