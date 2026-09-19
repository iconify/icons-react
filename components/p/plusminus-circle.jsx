import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z46p-jbup.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z46p-jbup"/>`,
		"fallback": "f7:plusminus-circle",
	});
}

export default Component;
