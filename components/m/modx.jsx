import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pko1oacdf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pko1oacdf"/>`,
		"fallback": "devicon-plain:modx",
	});
}

export default Component;
