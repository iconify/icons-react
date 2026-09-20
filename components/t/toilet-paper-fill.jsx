import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8fshfj-z.css';
import '../../css/n/nmroajm4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8fshfj-z"/><path clip-rule="evenodd" class="nmroajm4x"/>`,
		"fallback": "mingcute:toilet-paper-fill",
	});
}

export default Component;
