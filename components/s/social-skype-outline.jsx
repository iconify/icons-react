import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jte5zrb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jte5zrb5l"/>`,
		"fallback": "typcn:social-skype-outline",
	});
}

export default Component;
