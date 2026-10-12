import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqp3zebpd.css';
import '../../css/l/l_9-3eagj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqp3zebpd"/><path class="l_9-3eagj"/>`,
		"fallback": "lucide-extended:layers-2-filled",
	});
}

export default Component;
