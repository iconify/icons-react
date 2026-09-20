import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zho1kaciy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zho1kaciy"/>`,
		"fallback": "streamline:sort-descending-solid",
	});
}

export default Component;
