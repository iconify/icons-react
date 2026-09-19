import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0giy58mf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0giy58mf"/>`,
		"fallback": "f7:lock-slash-fill",
	});
}

export default Component;
