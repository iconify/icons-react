import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw1xrovwo.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw1xrovwo"/>`,
		"fallback": "qlementine-icons:pen-24",
	});
}

export default Component;
