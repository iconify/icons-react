import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb5ck8ldz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb5ck8ldz"/>`,
		"fallback": "cryptocurrency:ong",
	});
}

export default Component;
