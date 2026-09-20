import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpyn0l9lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpyn0l9lu"/>`,
		"fallback": "tabler:repeat",
	});
}

export default Component;
