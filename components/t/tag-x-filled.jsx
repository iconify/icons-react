import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp6t2zbys.css';
import '../../css/l/le77-ub7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cp6t2zbys"/><path class="le77-ub7e"/>`,
		"fallback": "lucide-extended:tag-x-filled",
	});
}

export default Component;
