import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bag_e0a9f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bag_e0a9f"/>`,
		"fallback": "fa7-solid:road-circle-check",
	});
}

export default Component;
