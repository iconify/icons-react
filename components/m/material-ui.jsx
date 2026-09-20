import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t19d__biu.css';

const viewBox = {"width":256,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t19d__biu"/>`,
		"fallback": "thesvg-color:material-ui",
	});
}

export default Component;
