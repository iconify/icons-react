import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlpr67b5a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlpr67b5a"/>`,
		"fallback": "streamline-flex:router-wifi-network-solid",
	});
}

export default Component;
