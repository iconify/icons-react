import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7sr0jbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7sr0jbzq"/>`,
		"fallback": "tabler:square-number-3-filled",
	});
}

export default Component;
