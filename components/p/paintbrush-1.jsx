import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_igzvbfb.css';
import '../../css/m/mofjnfb7v.css';
import '../../css/d/d9if94bjp.css';
import '../../css/x/x36ij3b7l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_igzvbfb"/><path class="mofjnfb7v"/><path class="d9if94bjp"/><path class="x36ij3b7l"/></g>`,
		"fallback": "streamline-color:paintbrush-1",
	});
}

export default Component;
