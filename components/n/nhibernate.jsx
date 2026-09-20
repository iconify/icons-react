import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5h6isb2b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5h6isb2b"/>`,
		"fallback": "thesvg:nhibernate",
	});
}

export default Component;
