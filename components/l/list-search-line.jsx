import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gctektbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gctektbtq"/>`,
		"fallback": "mingcute:list-search-line",
	});
}

export default Component;
