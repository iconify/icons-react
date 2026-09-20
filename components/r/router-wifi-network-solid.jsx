import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to1bekb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="to1bekb3v"/>`,
		"fallback": "streamline-sharp:router-wifi-network-solid",
	});
}

export default Component;
