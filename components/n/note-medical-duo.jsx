import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8t_k5p9z.css';
import '../../css/b/btq804b6i.css';
import '../../css/h/hw499ejxi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8t_k5p9z"/><path class="btq804b6i"/><path class="hw499ejxi"/></g>`,
		"fallback": "glyphs:note-medical-duo",
	});
}

export default Component;
