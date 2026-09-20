import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex6pcz9lz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ex6pcz9lz"/>`,
		"fallback": "streamline-flex:maximize-2-solid",
	});
}

export default Component;
