import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvz4j4bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvz4j4bvw"/>`,
		"fallback": "andrsrxn:text-decrease-spacing",
	});
}

export default Component;
