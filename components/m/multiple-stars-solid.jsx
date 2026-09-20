import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wblctf01d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wblctf01d"/>`,
		"fallback": "streamline-plump:multiple-stars-solid",
	});
}

export default Component;
