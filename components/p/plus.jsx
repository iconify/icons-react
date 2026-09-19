import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntat1nopg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntat1nopg"/>`,
		"fallback": "fa6-solid:plus",
	});
}

export default Component;
