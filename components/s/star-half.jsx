import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd6uv7bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd6uv7bdp"/>`,
		"fallback": "boxicons:star-half",
	});
}

export default Component;
