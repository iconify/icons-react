import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg7r8vz2b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg7r8vz2b"/>`,
		"fallback": "dinkie-icons:money-bag",
	});
}

export default Component;
