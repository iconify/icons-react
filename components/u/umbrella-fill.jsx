import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw9xuwfok.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw9xuwfok"/>`,
		"fallback": "f7:umbrella-fill",
	});
}

export default Component;
