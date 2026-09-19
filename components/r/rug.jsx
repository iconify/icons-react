import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrfx1wbqg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrfx1wbqg"/>`,
		"fallback": "fa6-solid:rug",
	});
}

export default Component;
