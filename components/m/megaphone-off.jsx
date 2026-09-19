import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dx4nfqbec.css';
import '../../css/s/sbg6umb9z.css';
import '../../css/z/z6jpfcbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dx4nfqbec"/><path class="sbg6umb9z"/><path class="z6jpfcbpc"/></g>`,
		"fallback": "hugeicons:megaphone-off",
	});
}

export default Component;
