import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uk_v7bife.css';
import '../../css/b/b1w3ycbdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="uk_v7bife"/><path class="b1w3ycbdv"/></g>`,
		"fallback": "streamline:slack",
	});
}

export default Component;
