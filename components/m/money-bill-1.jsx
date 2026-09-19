import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht82qccml.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht82qccml"/>`,
		"fallback": "fa7-solid:money-bill-1",
	});
}

export default Component;
