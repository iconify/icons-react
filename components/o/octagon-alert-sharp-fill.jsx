import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g40yip9tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g40yip9tu"/>`,
		"fallback": "keyline-icons:octagon-alert-sharp-fill",
	});
}

export default Component;
