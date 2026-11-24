import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db1241bah.css';
import '../../css/l/l_9-3eagj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db1241bah"/><path class="l_9-3eagj"/>`,
		"fallback": "lucide-extended:layers-2-filled",
	});
}

export default Component;
