import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whlbo9qbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whlbo9qbh"/>`,
		"fallback": "streamline:phone-remix",
	});
}

export default Component;
