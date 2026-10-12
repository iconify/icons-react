import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd3tyqb5z.css';
import '../../css/r/rvqm-4muf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd3tyqb5z"/><path class="rvqm-4muf"/>`,
		"fallback": "lucide-extended:square-mouse-pointer-filled",
	});
}

export default Component;
