import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtd4pnnoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtd4pnnoa"/>`,
		"fallback": "keyline-icons:scan-face-sharp-fill",
	});
}

export default Component;
