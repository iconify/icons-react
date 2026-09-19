import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqyyk4ovl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqyyk4ovl"/>`,
		"fallback": "dinkie-icons:satellite",
	});
}

export default Component;
