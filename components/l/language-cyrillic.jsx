import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1j49ptmf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1j49ptmf"/>`,
		"fallback": "dinkie-icons:language-cyrillic",
	});
}

export default Component;
