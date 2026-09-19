import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1madqn3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1madqn3z"/>`,
		"fallback": "heroicons-outline:phone-incoming",
	});
}

export default Component;
