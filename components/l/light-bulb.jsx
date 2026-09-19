import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj95-5_rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj95-5_rw"/>`,
		"fallback": "heroicons-outline:light-bulb",
	});
}

export default Component;
