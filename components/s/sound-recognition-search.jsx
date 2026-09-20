import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bllrbd7nm.css';
import '../../css/n/n-lmplbaj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bllrbd7nm"/><path class="n-lmplbaj"/></g>`,
		"fallback": "streamline-flex-color:sound-recognition-search",
	});
}

export default Component;
