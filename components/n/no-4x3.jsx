import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyroak62h.css';
import '../../css/j/jtbbcksnj.css';
import '../../css/l/lm6pm0b8y.css';
import '../../css/d/ddczr-bbd.css';
import '../../css/c/cl6jqfbnm.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyroak62h"/><path class="jtbbcksnj"/><path class="lm6pm0b8y"/><path class="ddczr-bbd"/><path class="cl6jqfbnm"/>`,
		"fallback": "flag:no-4x3",
	});
}

export default Component;
