import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aswp9gckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aswp9gckx"/>`,
		"fallback": "streamline-sharp:link-chain-remix",
	});
}

export default Component;
