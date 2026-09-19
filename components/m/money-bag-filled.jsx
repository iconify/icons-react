import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6wdq4byc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6wdq4byc"/>`,
		"fallback": "dinkie-icons:money-bag-filled",
	});
}

export default Component;
