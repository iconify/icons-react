import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-t2ccyb.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg-t2ccyb"/>`,
		"fallback": "whh:sendtoback",
	});
}

export default Component;
