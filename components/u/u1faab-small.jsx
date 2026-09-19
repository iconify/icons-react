import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmjoq-bny.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmjoq-bny"/>`,
		"fallback": "dinkie-icons:u1faab-small",
	});
}

export default Component;
