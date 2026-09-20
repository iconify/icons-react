import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq2m70lut.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq2m70lut"/>`,
		"fallback": "pinhead:sedan-with-raised-hood",
	});
}

export default Component;
