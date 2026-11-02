import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oys82-bsj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oys82-bsj"/>`,
		"fallback": "devicon-plain:lwc",
	});
}

export default Component;
