import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjy9ebcfu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjy9ebcfu"/>`,
		"fallback": "fa6-solid:person-burst",
	});
}

export default Component;
