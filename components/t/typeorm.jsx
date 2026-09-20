import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_2pc4bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_2pc4bfm"/>`,
		"fallback": "simple-icons:typeorm",
	});
}

export default Component;
