import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuw6ebbdg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iuw6ebbdg"/>`,
		"fallback": "streamline:one-finger-drag-horizontal-remix",
	});
}

export default Component;
