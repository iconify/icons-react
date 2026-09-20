import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6o0ew3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6o0ew3d"/>`,
		"fallback": "mynaui:pyramid-solid",
	});
}

export default Component;
