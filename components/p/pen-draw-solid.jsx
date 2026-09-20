import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajhqg1bwf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ajhqg1bwf"/>`,
		"fallback": "streamline:pen-draw-solid",
	});
}

export default Component;
