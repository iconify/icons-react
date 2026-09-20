import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-gn4pbos.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-gn4pbos"/>`,
		"fallback": "streamline:module-three",
	});
}

export default Component;
