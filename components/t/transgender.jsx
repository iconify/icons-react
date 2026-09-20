import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmrndwx7j.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmrndwx7j"/>`,
		"fallback": "jam:transgender",
	});
}

export default Component;
