import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckolmjdhr.css';
import '../../css/u/uyz5clfjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckolmjdhr"/><path class="uyz5clfjb"/></g>`,
		"fallback": "andrsrxn:subtitles-off",
	});
}

export default Component;
