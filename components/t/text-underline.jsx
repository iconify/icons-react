import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxjcc1i8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxjcc1i8q"/>`,
		"fallback": "ix:text-underline",
	});
}

export default Component;
