import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iod-m7bxe.css';
import '../../css/b/bpu_dobxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iod-m7bxe"/><path clip-rule="evenodd" class="bpu_dobxt"/></g>`,
		"fallback": "streamline-color:one-finger-tap-flat",
	});
}

export default Component;
