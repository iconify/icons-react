import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldn6wy7kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldn6wy7kf"/>`,
		"fallback": "gg:minimize-alt",
	});
}

export default Component;
