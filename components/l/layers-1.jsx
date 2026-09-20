import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9e091bkf.css';
import '../../css/j/j42krvf3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x9e091bkf"/><path class="j42krvf3a"/></g>`,
		"fallback": "streamline-flex-color:layers-1",
	});
}

export default Component;
