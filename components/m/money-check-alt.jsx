import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1qmkqbpw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1qmkqbpw"/>`,
		"fallback": "fa-solid:money-check-alt",
	});
}

export default Component;
