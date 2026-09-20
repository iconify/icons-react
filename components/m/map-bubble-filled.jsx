import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq7wclblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq7wclblt"/>`,
		"fallback": "tdesign:map-bubble-filled",
	});
}

export default Component;
