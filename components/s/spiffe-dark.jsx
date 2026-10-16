import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv9q3ib4j.css';

const viewBox = {"width":358.28,"height":358.28,"left":0.11,"top":1.86};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv9q3ib4j"/>`,
		"fallback": "thesvg-color:spiffe-dark",
	});
}

export default Component;
