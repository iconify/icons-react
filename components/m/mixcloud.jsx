import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2byrnbve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2byrnbve"/>`,
		"fallback": "fa7-brands:mixcloud",
	});
}

export default Component;
