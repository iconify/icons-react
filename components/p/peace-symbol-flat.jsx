import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwh2s5nuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwh2s5nuk"/>`,
		"fallback": "streamline-sharp-color:peace-symbol-flat",
	});
}

export default Component;
