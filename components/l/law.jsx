import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/outyeybxb.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="outyeybxb"/>`,
		"fallback": "octicon:law",
	});
}

export default Component;
