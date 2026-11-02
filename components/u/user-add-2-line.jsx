import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlg8p0mjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlg8p0mjy"/>`,
		"fallback": "mingcute:user-add-2-line",
	});
}

export default Component;
