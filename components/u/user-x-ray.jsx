import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-wun9brn.css';
import '../../css/l/libay-4ab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-wun9brn"/><path class="libay-4ab"/>`,
		"fallback": "carbon:user-x-ray",
	});
}

export default Component;
