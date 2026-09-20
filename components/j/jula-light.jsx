import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfz3p5diu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfz3p5diu"/>`,
		"fallback": "selfhst:jula-light",
	});
}

export default Component;
