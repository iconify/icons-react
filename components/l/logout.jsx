import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f52y9dbtb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f52y9dbtb"/>`,
		"fallback": "simple-line-icons:logout",
	});
}

export default Component;
