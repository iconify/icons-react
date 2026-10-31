import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npedpf06a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npedpf06a"/>`,
		"fallback": "coolicons:slider-3-duotone-round",
	});
}

export default Component;
