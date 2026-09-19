import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swmo9bk_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swmo9bk_y"/>`,
		"fallback": "fa-solid:registered",
	});
}

export default Component;
