import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgbb0_klj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgbb0_klj"/>`,
		"fallback": "simple-icons:semrush",
	});
}

export default Component;
