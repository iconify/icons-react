import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w39xa2bth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w39xa2bth"/>`,
		"fallback": "streamline-plump:shipping-box-1-remix",
	});
}

export default Component;
