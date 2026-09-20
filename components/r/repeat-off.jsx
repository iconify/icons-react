import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w338884rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w338884rh"/>`,
		"fallback": "tabler:repeat-off",
	});
}

export default Component;
