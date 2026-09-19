import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh3ac30pt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh3ac30pt"/>`,
		"fallback": "icons8:left-squared",
	});
}

export default Component;
