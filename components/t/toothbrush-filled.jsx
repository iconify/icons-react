import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7yw6gb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7yw6gb4q"/>`,
		"fallback": "lucide-extended:toothbrush-filled",
	});
}

export default Component;
