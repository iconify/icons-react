import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5gs9tbvm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5gs9tbvm"/>`,
		"fallback": "devicon-plain:jest",
	});
}

export default Component;
