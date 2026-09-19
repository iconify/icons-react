import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg59v6okj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg59v6okj"/>`,
		"fallback": "fa7-solid:phone-square-alt",
	});
}

export default Component;
