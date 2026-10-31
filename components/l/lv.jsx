import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz28tfban.css';
import '../../css/x/xcdes0mdw.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hz28tfban"/><path class="xcdes0mdw"/></g>`,
		"fallback": "cif:lv",
	});
}

export default Component;
