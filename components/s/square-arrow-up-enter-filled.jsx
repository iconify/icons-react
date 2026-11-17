import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8ce4b4q.css';
import '../../css/t/t31j6x04d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba8ce4b4q"/><path class="t31j6x04d"/>`,
		"fallback": "lucide-extended:square-arrow-up-enter-filled",
	});
}

export default Component;
