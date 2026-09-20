import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o23j82g8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o23j82g8w"/>`,
		"fallback": "ri:table-3",
	});
}

export default Component;
