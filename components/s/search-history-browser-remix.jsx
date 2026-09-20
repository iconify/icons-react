import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2u8nabzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d2u8nabzw"/>`,
		"fallback": "streamline-sharp:search-history-browser-remix",
	});
}

export default Component;
