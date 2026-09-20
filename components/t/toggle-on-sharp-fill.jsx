import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg9rrk_dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bg9rrk_dd"/>`,
		"fallback": "keyline-icons:toggle-on-sharp-fill",
	});
}

export default Component;
