import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf9jm3b-r.css';
import '../../css/a/an4-mnb4c.css';
import '../../css/m/m0352v01g.css';
import '../../css/z/zurzo7b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf9jm3b-r"/><path class="an4-mnb4c"/><path class="m0352v01g"/><path class="zurzo7b3n"/></g>`,
		"fallback": "streamline-ultimate-color:medical-specialty-knee-1",
	});
}

export default Component;
