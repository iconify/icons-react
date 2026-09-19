import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr89lux6p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr89lux6p"/>`,
		"fallback": "devicon-plain:norg",
	});
}

export default Component;
