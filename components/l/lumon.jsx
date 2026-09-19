import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak4krzd3y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak4krzd3y"/>`,
		"fallback": "fa7-brands:lumon",
	});
}

export default Component;
