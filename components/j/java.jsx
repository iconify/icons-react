import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udv3r3bwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udv3r3bwc"/>`,
		"fallback": "material-icon-theme:java",
	});
}

export default Component;
