import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6xf84byj.css';
import '../../css/s/s43d_mb-w.css';
import '../../css/j/jphoce4-e.css';
import '../../css/u/ut4n1hzlo.css';

const viewBox = {"width":108.236,"height":107.06};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGffGSldUJ" clipPathUnits="userSpaceOnUse"><path class="m6xf84byj"/></clipPath></defs><g clip-path="url(#SVGffGSldUJ)" transform="matrix(.35278 0 0 -.35278 -73.762 177.44)" class="s43d_mb-w"><path class="jphoce4-e"/><path class="ut4n1hzlo"/></g>`,
		"fallback": "thesvg-color:wakapi",
	});
}

export default Component;
