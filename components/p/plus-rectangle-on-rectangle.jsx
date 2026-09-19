import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv912ko5b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv912ko5b"/>`,
		"fallback": "f7:plus-rectangle-on-rectangle",
	});
}

export default Component;
