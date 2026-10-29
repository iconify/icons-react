import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f19zj7btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f19zj7btg"/>`,
		"fallback": "vadivam:users-round-collaboration",
	});
}

export default Component;
