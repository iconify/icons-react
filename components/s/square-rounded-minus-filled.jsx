import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij-lldb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij-lldb6k"/>`,
		"fallback": "tabler:square-rounded-minus-filled",
	});
}

export default Component;
