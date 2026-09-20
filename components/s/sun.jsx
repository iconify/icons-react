import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq4fk-cfo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq4fk-cfo"/>`,
		"fallback": "pinhead:sun",
	});
}

export default Component;
