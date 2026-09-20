import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj8o377ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj8o377ai"/>`,
		"fallback": "tabler:overline",
	});
}

export default Component;
