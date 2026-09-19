import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c--6c_cei.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c--6c_cei"/>`,
		"fallback": "devicon-plain:perl",
	});
}

export default Component;
