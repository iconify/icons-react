import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um53zxbwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um53zxbwv"/>`,
		"fallback": "bytesize:star",
	});
}

export default Component;
