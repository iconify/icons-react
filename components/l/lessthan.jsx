import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2y4lwb5y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2y4lwb5y"/>`,
		"fallback": "f7:lessthan",
	});
}

export default Component;
