import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/esdcybc0c.css';
import '../../css/r/rcanfy94i.css';
import '../../css/c/ccdl80bco.css';
import '../../css/z/z9dblmyth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="esdcybc0c wm-shadow"/><path class="rcanfy94i wm-shadow"/><path class="ccdl80bco"/><path class="z9dblmyth"/></g>`,
		"fallback": "withicons-brutal:scissors",
	});
}

export default Component;
