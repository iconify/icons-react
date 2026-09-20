import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulj6f9bpb.css';
import '../../css/k/k12cdmnwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulj6f9bpb"/><path class="k12cdmnwo"/>`,
		"fallback": "token:pyth",
	});
}

export default Component;
