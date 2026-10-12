import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_r-5l9bw.css';
import '../../css/t/t9h25ryne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_r-5l9bw"/><path class="t9h25ryne"/>`,
		"fallback": "lucide-extended:route-off-filled",
	});
}

export default Component;
