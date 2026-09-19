import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu6qonbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu6qonbjj"/>`,
		"fallback": "cbi:play-bar-one",
	});
}

export default Component;
