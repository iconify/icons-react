import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpva-4bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpva-4bbk"/>`,
		"fallback": "guidance:no-litter-2",
	});
}

export default Component;
