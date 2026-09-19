import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne0v7dbta.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne0v7dbta"/>`,
		"fallback": "fa7-brands:solana",
	});
}

export default Component;
