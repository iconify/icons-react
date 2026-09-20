import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atmx8dpqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atmx8dpqj"/>`,
		"fallback": "ri:sailboat-line",
	});
}

export default Component;
