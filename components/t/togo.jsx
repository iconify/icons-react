import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd20j3kke.css';
import '../../css/w/wyopycldg.css';
import '../../css/y/y98trh81b.css';
import '../../css/h/hlvevhb-x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd20j3kke"/><path class="wyopycldg"/><path class="y98trh81b"/><path class="hlvevhb-x"/>`,
		"fallback": "tabler-flags:togo",
	});
}

export default Component;
