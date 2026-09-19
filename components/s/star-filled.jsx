import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuieg7bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuieg7bdd"/>`,
		"fallback": "boxicons:star-filled",
	});
}

export default Component;
