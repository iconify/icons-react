import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np1cm194g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np1cm194g"/>`,
		"fallback": "streamline-flex-color:link-chain",
	});
}

export default Component;
