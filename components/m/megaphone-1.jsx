import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k60pif1jd.css';
import '../../css/j/jlxcs36um.css';
import '../../css/x/x2rlj0bzp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k60pif1jd"/><path class="jlxcs36um"/><path class="x2rlj0bzp"/></g>`,
		"fallback": "streamline-flex-color:megaphone-1",
	});
}

export default Component;
