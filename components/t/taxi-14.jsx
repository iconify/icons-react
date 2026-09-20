import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6tf23b2i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6tf23b2i"/>`,
		"fallback": "osmic:taxi-14",
	});
}

export default Component;
