import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkeo62b_a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkeo62b_a"/>`,
		"fallback": "devicon-plain:matlab",
	});
}

export default Component;
