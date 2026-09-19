import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iojqet6kl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iojqet6kl"/>`,
		"fallback": "devicon-plain:vuejs",
	});
}

export default Component;
