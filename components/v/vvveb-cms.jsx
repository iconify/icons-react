import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brtpu-bnf.css';

const viewBox = {"width":48,"height":22.5,"top":13.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brtpu-bnf"/>`,
		"fallback": "thesvg-color:vvveb-cms",
	});
}

export default Component;
