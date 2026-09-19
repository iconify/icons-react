import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq9kl-b4p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq9kl-b4p"/>`,
		"fallback": "devicon-plain:sqlite",
	});
}

export default Component;
