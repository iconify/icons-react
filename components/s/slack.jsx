import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhx6pibvk.css';
import '../../css/b/b1w3ycbdv.css';
import '../../css/u/uk_v7bife.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mhx6pibvk"><path class="b1w3ycbdv"/><path class="uk_v7bife"/></g>`,
		"fallback": "streamline-color:slack",
	});
}

export default Component;
