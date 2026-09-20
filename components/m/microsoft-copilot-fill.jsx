import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxj-dx65r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxj-dx65r"/>`,
		"fallback": "ri:microsoft-copilot-fill",
	});
}

export default Component;
