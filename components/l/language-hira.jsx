import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkjpidb8f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkjpidb8f"/>`,
		"fallback": "dinkie-icons:language-hira",
	});
}

export default Component;
