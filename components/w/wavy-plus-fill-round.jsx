import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7nanac3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7nanac3i"/>`,
		"fallback": "coolicons:wavy-plus-fill-round",
	});
}

export default Component;
