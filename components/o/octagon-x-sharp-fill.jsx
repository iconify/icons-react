import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5tbwb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pq5tbwb0x"/>`,
		"fallback": "keyline-icons:octagon-x-sharp-fill",
	});
}

export default Component;
