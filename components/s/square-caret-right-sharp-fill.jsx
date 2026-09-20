import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfq2nobmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vfq2nobmf"/>`,
		"fallback": "keyline-icons:square-caret-right-sharp-fill",
	});
}

export default Component;
