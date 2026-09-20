import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am86nkbqg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am86nkbqg"/>`,
		"fallback": "streamline:magnifying-glass-remix",
	});
}

export default Component;
