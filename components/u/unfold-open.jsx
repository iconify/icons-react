import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af13y3bim.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af13y3bim"/>`,
		"fallback": "carbon:unfold-open",
	});
}

export default Component;
