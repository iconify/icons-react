import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojjc2sbvn.css';
import '../../css/o/oh7nkob3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojjc2sbvn"/><path class="oh7nkob3s"/>`,
		"fallback": "streamline-ultimate:server-star-1-bold",
	});
}

export default Component;
