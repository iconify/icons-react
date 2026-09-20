import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2c_0m8bb.css';
import '../../css/f/fezn9qb7x.css';

const viewBox = {"width":450,"height":49.65,"left":275,"top":475.18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2c_0m8bb"/><path class="fezn9qb7x"/>`,
		"fallback": "thesvg-color:maruti-suzuki",
	});
}

export default Component;
