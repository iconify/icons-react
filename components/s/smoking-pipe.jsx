import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7n_njbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7n_njbvy"/>`,
		"fallback": "mdi:smoking-pipe",
	});
}

export default Component;
