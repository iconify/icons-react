import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vq5mhzbuv.css';
import '../../css/j/jq21wtb7e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vq5mhzbuv"/><path class="jq21wtb7e"/></g>`,
		"fallback": "streamline-color:two-finger-drag-hotizontal-flat",
	});
}

export default Component;
