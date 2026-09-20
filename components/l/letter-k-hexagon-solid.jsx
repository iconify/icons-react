import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzl802ntq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzl802ntq"/>`,
		"fallback": "mynaui:letter-k-hexagon-solid",
	});
}

export default Component;
