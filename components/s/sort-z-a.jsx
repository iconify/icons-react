import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qolkiob9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qolkiob9w"/>`,
		"fallback": "tabler:sort-z-a",
	});
}

export default Component;
