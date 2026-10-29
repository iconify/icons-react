import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq9lw3b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq9lw3b8w"/>`,
		"fallback": "vadivam:table-2",
	});
}

export default Component;
