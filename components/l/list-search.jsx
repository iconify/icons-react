import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8j6cbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8j6cbrq"/>`,
		"fallback": "tabler:list-search",
	});
}

export default Component;
