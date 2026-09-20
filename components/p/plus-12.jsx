import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k96tsedlp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k96tsedlp"/>`,
		"fallback": "qlementine-icons:plus-12",
	});
}

export default Component;
