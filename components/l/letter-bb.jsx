import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uph1ozkms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uph1ozkms"/>`,
		"fallback": "carbon:letter-bb",
	});
}

export default Component;
