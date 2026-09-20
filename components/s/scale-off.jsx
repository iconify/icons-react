import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aakw6q4ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aakw6q4ul"/>`,
		"fallback": "tabler:scale-off",
	});
}

export default Component;
