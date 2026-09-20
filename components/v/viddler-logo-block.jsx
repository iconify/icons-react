import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iurr2qbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iurr2qbwg"/>`,
		"fallback": "streamline-logos:viddler-logo-block",
	});
}

export default Component;
