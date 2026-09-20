import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5ir8t7dj.css';
import '../../css/o/ofv1gwgkf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h5ir8t7dj"/><path class="ofv1gwgkf"/></g>`,
		"fallback": "streamline-color:tinder",
	});
}

export default Component;
