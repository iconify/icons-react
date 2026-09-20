import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q69vg3b8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q69vg3b8d"/>`,
		"fallback": "streamline-flex-color:recycle-bin-3-flat",
	});
}

export default Component;
