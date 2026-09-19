import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0l4rc-vw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0l4rc-vw"/>`,
		"fallback": "fa6-solid:mosque",
	});
}

export default Component;
