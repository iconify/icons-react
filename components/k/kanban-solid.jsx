import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwyge7-ou.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwyge7-ou"/>`,
		"fallback": "teenyicons:kanban-solid",
	});
}

export default Component;
