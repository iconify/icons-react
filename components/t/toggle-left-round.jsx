import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksd246hoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksd246hoc"/>`,
		"fallback": "coolicons:toggle-left-round",
	});
}

export default Component;
