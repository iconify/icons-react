import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwltb-50z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwltb-50z"/>`,
		"fallback": "f7:view-3d",
	});
}

export default Component;
