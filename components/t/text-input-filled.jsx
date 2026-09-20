import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd-3o55-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd-3o55-e"/>`,
		"fallback": "reicon:text-input-filled",
	});
}

export default Component;
