import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9nmxacxq.css';
import '../../css/a/ay4fyksgr.css';
import '../../css/u/ug5hi9q-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q9nmxacxq"/><path class="ay4fyksgr"/><path class="ug5hi9q-i"/></g>`,
		"fallback": "glyphs:tags-duo",
	});
}

export default Component;
