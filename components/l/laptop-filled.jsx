import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bixg4h3ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bixg4h3ck"/>`,
		"fallback": "lucide-extended:laptop-filled",
	});
}

export default Component;
