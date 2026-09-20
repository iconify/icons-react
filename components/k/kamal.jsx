import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db9-40bub.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8zxzbcvs.css';

const viewBox = {"width":145,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGTztPORtj"><path class="db9-40bub"/></clipPath><g clip-path="url(#SVGTztPORtj)" class="ft5dv1b6b"><path clip-rule="evenodd" class="q8zxzbcvs"/></g>`,
		"fallback": "thesvg-color:kamal",
	});
}

export default Component;
