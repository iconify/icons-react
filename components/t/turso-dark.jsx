import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz0atbcvl.css';
import '../../css/g/g81mwabxo.css';
import '../../css/w/wzfpgk8qg.css';

const viewBox = {"width":201,"height":170};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zz0atbcvl"/><path class="g81mwabxo"/><path class="wzfpgk8qg"/></g>`,
		"fallback": "thesvg-color:turso-dark",
	});
}

export default Component;
