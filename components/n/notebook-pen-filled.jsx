import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv1b1wt7j.css';
import '../../css/h/hb1iu0uss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv1b1wt7j"/><path class="hb1iu0uss"/>`,
		"fallback": "lucide-extended:notebook-pen-filled",
	});
}

export default Component;
