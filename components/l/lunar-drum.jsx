import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n2zp3sbfn.css';
import '../../css/p/pdftahbub.css';
import '../../css/t/trqd8gbvg.css';
import '../../css/v/vxtsvobog.css';
import '../../css/b/bom9xkbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n2zp3sbfn wm-shadow"/><path class="pdftahbub wm-shadow"/><path class="trqd8gbvg"/><path class="vxtsvobog"/><path class="bom9xkbmd wm-s"/></g>`,
		"fallback": "withicons-brutal:lunar-drum",
	});
}

export default Component;
