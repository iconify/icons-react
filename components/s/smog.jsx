import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1xy50bar.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1xy50bar"/>`,
		"fallback": "fa7-solid:smog",
	});
}

export default Component;
