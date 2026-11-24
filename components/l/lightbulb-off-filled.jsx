import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvf-d1baf.css';
import '../../css/c/cs8o81b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvf-d1baf"/><path class="cs8o81b5q"/>`,
		"fallback": "lucide-extended:lightbulb-off-filled",
	});
}

export default Component;
