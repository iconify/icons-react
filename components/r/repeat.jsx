import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyczhacmu.css';
import '../../css/o/ofvh391ie.css';
import '../../css/a/a4f1lt8mi.css';
import '../../css/n/ndw1d7h0o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyczhacmu"/><path class="ofvh391ie"/><path class="a4f1lt8mi"/><path class="ndw1d7h0o"/></g>`,
		"fallback": "glyphs-poly:repeat",
	});
}

export default Component;
