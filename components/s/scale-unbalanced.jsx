import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poeaz65-a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poeaz65-a"/>`,
		"fallback": "fa6-solid:scale-unbalanced",
	});
}

export default Component;
