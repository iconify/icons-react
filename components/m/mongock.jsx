import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iug3cpbpr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iug3cpbpr"/>`,
		"fallback": "devicon-plain:mongock",
	});
}

export default Component;
