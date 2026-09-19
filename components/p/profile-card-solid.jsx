import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhw43hs6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhw43hs6q"/>`,
		"fallback": "flowbite:profile-card-solid",
	});
}

export default Component;
