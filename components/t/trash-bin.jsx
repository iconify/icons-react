import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z477j3bdr.css';
import '../../css/g/gno1t7swb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="z477j3bdr"/><path class="gno1t7swb"/>`,
		"fallback": "famicons:trash-bin",
	});
}

export default Component;
