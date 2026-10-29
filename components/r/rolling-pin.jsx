import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi9tr3bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi9tr3bzs"/>`,
		"fallback": "withicons:rolling-pin",
	});
}

export default Component;
