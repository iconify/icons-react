import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzt4b7bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzt4b7bzy"/>`,
		"fallback": "heroicons-outline:selector",
	});
}

export default Component;
