import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrndicbcc.css';
import '../../css/m/m3qytymuy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrndicbcc"/><path class="m3qytymuy"/>`,
		"fallback": "carbon:rewind-10",
	});
}

export default Component;
