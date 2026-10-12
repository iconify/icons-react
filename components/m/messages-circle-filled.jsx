import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wey8zoa3m.css';
import '../../css/v/vcmk6cc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wey8zoa3m"/><path class="vcmk6cc8q"/>`,
		"fallback": "lucide-extended:messages-circle-filled",
	});
}

export default Component;
