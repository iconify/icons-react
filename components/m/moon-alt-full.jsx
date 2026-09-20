import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chto62blm.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chto62blm"/>`,
		"fallback": "wi:moon-alt-full",
	});
}

export default Component;
