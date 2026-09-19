import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_2-9c3fr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_2-9c3fr"/>`,
		"fallback": "carbon:letter-aa",
	});
}

export default Component;
