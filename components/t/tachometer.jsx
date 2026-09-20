import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjcuh8_ow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjcuh8_ow"/>`,
		"fallback": "pajamas:tachometer",
	});
}

export default Component;
