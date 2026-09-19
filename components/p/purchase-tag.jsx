import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9kcbb2m.css';
import '../../css/z/zn5t45b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9kcbb2m"/><circle class="zn5t45b4k"/>`,
		"fallback": "bx:purchase-tag",
	});
}

export default Component;
