import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw1-8ybcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw1-8ybcz"/>`,
		"fallback": "lucide:text-align-justify-start",
	});
}

export default Component;
