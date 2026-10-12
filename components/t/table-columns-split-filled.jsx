import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwjy8pq2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwjy8pq2d"/>`,
		"fallback": "lucide-extended:table-columns-split-filled",
	});
}

export default Component;
