import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukw6yum5g.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukw6yum5g"/>`,
		"fallback": "fa-solid:transgender-alt",
	});
}

export default Component;
