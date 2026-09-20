import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esbhv0bom.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esbhv0bom"/>`,
		"fallback": "pinhead:one-one-two",
	});
}

export default Component;
