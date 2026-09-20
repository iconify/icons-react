import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le0i-4b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="le0i-4b7d"/>`,
		"fallback": "streamline-sharp-color:paperclip-2-flat",
	});
}

export default Component;
