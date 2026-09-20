import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahso_0mfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahso_0mfi"/>`,
		"fallback": "ri:pass-expired-fill",
	});
}

export default Component;
