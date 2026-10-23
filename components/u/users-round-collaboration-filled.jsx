import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-o7nuz9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-o7nuz9p"/>`,
		"fallback": "lucide-extended:users-round-collaboration-filled",
	});
}

export default Component;
