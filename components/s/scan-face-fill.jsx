import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrwj86bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrwj86bxv"/>`,
		"fallback": "keyline-icons:scan-face-fill",
	});
}

export default Component;
