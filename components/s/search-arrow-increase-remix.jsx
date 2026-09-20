import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i154zcy8g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i154zcy8g"/>`,
		"fallback": "streamline-flex:search-arrow-increase-remix",
	});
}

export default Component;
