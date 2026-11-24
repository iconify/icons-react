import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2cq6phge.css';
import '../../css/b/bpmeeqg8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2cq6phge"/><path clip-rule="evenodd" class="bpmeeqg8q"/>`,
		"fallback": "lucide-extended:square-star-filled",
	});
}

export default Component;
