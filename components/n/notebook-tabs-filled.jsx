import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxsq-7b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxsq-7b9q"/>`,
		"fallback": "lucide-extended:notebook-tabs-filled",
	});
}

export default Component;
