import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7n6uvkc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci7n6uvkc"/>`,
		"fallback": "streamline:sad-face-solid",
	});
}

export default Component;
