import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae1i43b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae1i43b6v"/>`,
		"fallback": "tabler:temperature-sun",
	});
}

export default Component;
