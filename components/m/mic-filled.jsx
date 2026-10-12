import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph626sk7j.css';
import '../../css/p/p3y5o8bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph626sk7j"/><path class="p3y5o8bll"/>`,
		"fallback": "lucide-extended:mic-filled",
	});
}

export default Component;
