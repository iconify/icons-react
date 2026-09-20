import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyystr99p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyystr99p"/>`,
		"fallback": "uiw:tags",
	});
}

export default Component;
