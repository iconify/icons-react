import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8rclib1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8rclib1o"/>`,
		"fallback": "cbi:nanoleaf-secretlabs",
	});
}

export default Component;
