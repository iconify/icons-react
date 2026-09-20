import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l40g1qj4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l40g1qj4w"/>`,
		"fallback": "streamline-sharp:phone-message-remix",
	});
}

export default Component;
