import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2-go7evs.css';

const viewBox = {"width":35,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2-go7evs"/>`,
		"fallback": "et:puzzle",
	});
}

export default Component;
