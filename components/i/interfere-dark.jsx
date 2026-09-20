import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brj83-_4y.css';

const viewBox = {"width":80,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brj83-_4y"/>`,
		"fallback": "thesvg-color:interfere-dark",
	});
}

export default Component;
