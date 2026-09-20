import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhw-h4bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhw-h4bwe"/>`,
		"fallback": "streamline-sharp:party-popper-remix",
	});
}

export default Component;
