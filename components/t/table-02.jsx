import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2t02b29a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2t02b29a"/>`,
		"fallback": "hugeicons:table-02",
	});
}

export default Component;
