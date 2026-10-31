import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf5ttjbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf5ttjbmu"/>`,
		"fallback": "coolicons:tennis-ball-fill-round",
	});
}

export default Component;
