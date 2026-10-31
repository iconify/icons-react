import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5d0hlu-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5d0hlu-p"/>`,
		"fallback": "withicons:network-gloss",
	});
}

export default Component;
