import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5ug_5_ty.css';
import '../../css/k/kpifkvb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5ug_5_ty"/><path class="kpifkvb0z"/>`,
		"fallback": "mingcute:tag-line",
	});
}

export default Component;
