import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-2u-zbsl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-2u-zbsl"/>`,
		"fallback": "bytesize:lightning",
	});
}

export default Component;
