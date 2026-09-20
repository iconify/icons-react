import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2dsc-nsi.css';
import '../../css/s/so6mrfb9q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2dsc-nsi"/><path class="so6mrfb9q"/></g>`,
		"fallback": "streamline-flex-color:toilet-sign-man",
	});
}

export default Component;
