import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_0rk7fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1_0rk7fh"/>`,
		"fallback": "simple-icons:opentelemetry",
	});
}

export default Component;
