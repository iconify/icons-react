import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6515jepd.css';
import '../../css/c/c97n50bhy.css';
import '../../css/z/z1zkdbgsi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6515jepd"/><path class="c97n50bhy"/><path class="z1zkdbgsi"/>`,
		"fallback": "selfhst:proton-lumo-dark",
	});
}

export default Component;
