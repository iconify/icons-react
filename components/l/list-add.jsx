import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjqawm_sp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjqawm_sp"/>`,
		"fallback": "system-uicons:list-add",
	});
}

export default Component;
