import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbrjd2beo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbrjd2beo"/>`,
		"fallback": "fa7-solid:jug-detergent",
	});
}

export default Component;
