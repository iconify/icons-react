import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj7fwkbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj7fwkbyt"/>`,
		"fallback": "tabler:lock-flame",
	});
}

export default Component;
