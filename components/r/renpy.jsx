import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pet5d9ycq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pet5d9ycq"/>`,
		"fallback": "devicon-plain:renpy",
	});
}

export default Component;
