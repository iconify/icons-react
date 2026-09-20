import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aogj_pa0y.css';
import '../../css/e/eh5nwubqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aogj_pa0y"/><path class="eh5nwubqv"/></g>`,
		"fallback": "streamline-color:two-finger-tap-flat",
	});
}

export default Component;
