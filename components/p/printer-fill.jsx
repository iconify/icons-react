import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zeju9gbfs.css';
import '../../css/y/yorxn2xrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zeju9gbfs"/><path class="yorxn2xrj"/></g>`,
		"fallback": "keyline-icons:printer-fill",
	});
}

export default Component;
