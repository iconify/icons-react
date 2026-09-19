import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5bo1pb1k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5bo1pb1k"/>`,
		"fallback": "fa7-solid:person-skiing-nordic",
	});
}

export default Component;
