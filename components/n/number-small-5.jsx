import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew8w2puiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew8w2puiv"/>`,
		"fallback": "carbon:number-small-5",
	});
}

export default Component;
