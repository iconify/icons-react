import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isuqlx49y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isuqlx49y"/>`,
		"fallback": "solar:shield-minimalistic-linear",
	});
}

export default Component;
