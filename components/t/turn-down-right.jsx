import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c75k6abxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c75k6abxj"/>`,
		"fallback": "meteor-icons:turn-down-right",
	});
}

export default Component;
