import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dagcc8buf.css';
import '../../css/n/ny7q1b0qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dagcc8buf"/><path class="ny7q1b0qs"/>`,
		"fallback": "lineicons:target-user",
	});
}

export default Component;
