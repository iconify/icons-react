import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czfz4hb5g.css';
import '../../css/p/pin2338sh.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGDTtXObki)"><path clip-rule="evenodd" class="czfz4hb5g"/></g><defs><clipPath id="SVGDTtXObki"><path class="pin2338sh"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:polar-light",
	});
}

export default Component;
