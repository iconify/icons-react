import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klx41e55r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klx41e55r"/>`,
		"fallback": "noviair:syringe-clock",
	});
}

export default Component;
