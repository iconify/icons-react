import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijx9o5bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijx9o5bpo"/>`,
		"fallback": "ri:list-indefinite",
	});
}

export default Component;
