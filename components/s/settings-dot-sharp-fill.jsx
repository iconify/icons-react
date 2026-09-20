import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvxyueb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvxyueb_g"/>`,
		"fallback": "keyline-icons:settings-dot-sharp-fill",
	});
}

export default Component;
