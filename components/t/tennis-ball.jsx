import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpzjo0bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpzjo0bub"/>`,
		"fallback": "noviair-light:tennis-ball",
	});
}

export default Component;
