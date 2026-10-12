import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8v037b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8v037b-z"/>`,
		"fallback": "lucide-extended:table-properties-filled",
	});
}

export default Component;
