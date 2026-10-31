import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxt3a99fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxt3a99fj"/>`,
		"fallback": "coolicons:octagon-check-fill-round",
	});
}

export default Component;
