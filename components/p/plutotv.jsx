import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da32s_zqc.css';
import '../../css/l/lpxx92zqs.css';
import '../../css/m/menrsu8bq.css';
import '../../css/x/x8lzkbc1i.css';

const viewBox = {"width":2500,"height":2500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGj8ENbdAJ)"><rect class="da32s_zqc"/><path class="lpxx92zqs"/><path class="menrsu8bq"/></g><defs><clipPath id="SVGj8ENbdAJ"><path class="x8lzkbc1i"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:plutotv",
	});
}

export default Component;
