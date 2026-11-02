import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevot4b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevot4b2o"/>`,
		"fallback": "mingcute:play-football-line",
	});
}

export default Component;
