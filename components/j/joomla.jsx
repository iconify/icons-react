import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oko04mjqi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oko04mjqi"/>`,
		"fallback": "fa7-brands:joomla",
	});
}

export default Component;
