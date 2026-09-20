import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qskr1bcgn.css';
import '../../css/s/st95v6bsx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qskr1bcgn"/><path class="st95v6bsx"/></g>`,
		"fallback": "streamline:lemon-fruit-seasoning",
	});
}

export default Component;
