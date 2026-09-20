import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blubov6ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blubov6ot"/>`,
		"fallback": "thesvg:shelly",
	});
}

export default Component;
