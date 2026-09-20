import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy21z1bhf.css';
import '../../css/u/u-tgs14dj.css';
import '../../css/s/s7w-ymlec.css';
import '../../css/g/gwe793bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy21z1bhf"/><path class="u-tgs14dj"/><path class="s7w-ymlec"/><path class="gwe793bbk"/></g>`,
		"fallback": "tdesign:watermelon",
	});
}

export default Component;
