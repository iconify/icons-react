import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvz6qju8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvz6qju8g"/>`,
		"fallback": "streamline-ultimate:subtract-circle",
	});
}

export default Component;
