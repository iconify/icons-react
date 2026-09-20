import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjx5bbb8f.css';
import '../../css/j/j7sgl10vf.css';
import '../../css/c/cys7v3q4f.css';
import '../../css/b/bmn4wibct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjx5bbb8f"/><path class="j7sgl10vf"/><path class="cys7v3q4f"/><path class="bmn4wibct"/></g>`,
		"fallback": "streamline-color:justice-hammer",
	});
}

export default Component;
