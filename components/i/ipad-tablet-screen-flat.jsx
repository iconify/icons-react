import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zf5b46jaw.css';
import '../../css/v/v03b_nbad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zf5b46jaw"/><path clip-rule="evenodd" class="v03b_nbad"/></g>`,
		"fallback": "streamline-plump-color:ipad-tablet-screen-flat",
	});
}

export default Component;
