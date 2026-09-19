import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pprehsb4n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pprehsb4n"/>`,
		"fallback": "fa7-solid:memory",
	});
}

export default Component;
