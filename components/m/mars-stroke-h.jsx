import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tplqalbyh.css';

const viewBox = {"width":1920,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tplqalbyh"/>`,
		"fallback": "fa:mars-stroke-h",
	});
}

export default Component;
