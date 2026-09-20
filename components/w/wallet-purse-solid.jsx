import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf396fbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf396fbwn"/>`,
		"fallback": "streamline-sharp:wallet-purse-solid",
	});
}

export default Component;
