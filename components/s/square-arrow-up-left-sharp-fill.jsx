import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0n92z7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-0n92z7z"/>`,
		"fallback": "keyline-icons:square-arrow-up-left-sharp-fill",
	});
}

export default Component;
