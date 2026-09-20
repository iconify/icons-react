import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3-p54tvh.css';
import '../../css/r/rpwt9dlgx.css';
import '../../css/q/qhgn-cihs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3-p54tvh"/><path class="rpwt9dlgx"/><path class="qhgn-cihs"/></g>`,
		"fallback": "streamline-flex-color:table-lamp-2",
	});
}

export default Component;
