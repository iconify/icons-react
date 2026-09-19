import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj4vpob1k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj4vpob1k"/>`,
		"fallback": "fa7-solid:object-group",
	});
}

export default Component;
