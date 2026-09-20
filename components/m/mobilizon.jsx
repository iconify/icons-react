import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9xhsfe6o.css';
import '../../css/o/ooilqmbnh.css';
import '../../css/n/nga-i0ykp.css';

const viewBox = {"width":60,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9xhsfe6o"/><path class="ooilqmbnh"/><path class="nga-i0ykp"/>`,
		"fallback": "thesvg-color:mobilizon",
	});
}

export default Component;
