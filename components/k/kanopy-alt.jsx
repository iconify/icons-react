import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx8kpodkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx8kpodkc"/>`,
		"fallback": "cbi:kanopy-alt",
	});
}

export default Component;
