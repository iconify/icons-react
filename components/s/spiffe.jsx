import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h02ds3bnx.css';

const viewBox = {"width":358.28,"height":358.28,"left":0.11,"top":1.86};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h02ds3bnx"/>`,
		"fallback": "thesvg:spiffe",
	});
}

export default Component;
