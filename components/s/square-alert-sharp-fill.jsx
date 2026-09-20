import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za0456b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="za0456b7l"/>`,
		"fallback": "keyline-icons:square-alert-sharp-fill",
	});
}

export default Component;
