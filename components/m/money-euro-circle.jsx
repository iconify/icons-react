import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhvj3vb7n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhvj3vb7n"/>`,
		"fallback": "f7:money-euro-circle",
	});
}

export default Component;
