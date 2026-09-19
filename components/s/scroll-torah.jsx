import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii8jenblq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii8jenblq"/>`,
		"fallback": "fa6-solid:scroll-torah",
	});
}

export default Component;
