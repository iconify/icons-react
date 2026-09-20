import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkf605bzc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkf605bzc"/>`,
		"fallback": "material-icon-theme:tobi",
	});
}

export default Component;
