import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az85j8l9o.css';
import '../../css/c/cnhx37y6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="az85j8l9o"/><path class="cnhx37y6q"/>`,
		"fallback": "solar:magic-stick-outline",
	});
}

export default Component;
