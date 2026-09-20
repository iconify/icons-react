import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly6u8byv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tly6u8byv"/>`,
		"fallback": "streamline-flex:screenshot-remix",
	});
}

export default Component;
