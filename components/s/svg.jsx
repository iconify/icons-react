import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jefd25bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jefd25bdd"/>`,
		"fallback": "griddy-icons:svg",
	});
}

export default Component;
