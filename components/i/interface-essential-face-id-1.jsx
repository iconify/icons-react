import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uijtxsb7q.css';
import '../../css/z/z97ow4bur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uijtxsb7q"/><path class="z97ow4bur"/>`,
		"fallback": "streamline-pixel:interface-essential-face-id-1",
	});
}

export default Component;
