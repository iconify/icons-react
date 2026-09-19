import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjvaiwb-i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjvaiwb-i"/>`,
		"fallback": "dinkie-icons:torch",
	});
}

export default Component;
