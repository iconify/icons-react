import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmpdv0f8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmpdv0f8j"/>`,
		"fallback": "streamline:signal-full-remix",
	});
}

export default Component;
