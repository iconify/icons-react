import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pti38wbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pti38wbfm"/>`,
		"fallback": "vadivam:square-dashed-kanban",
	});
}

export default Component;
