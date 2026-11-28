import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kki7enbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kki7enbjy"/>`,
		"fallback": "iconaut:sparkles-solid",
	});
}

export default Component;
