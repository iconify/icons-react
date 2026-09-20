import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blgxw44em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blgxw44em"/>`,
		"fallback": "ri:table-2",
	});
}

export default Component;
