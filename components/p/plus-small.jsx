import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn045t_wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn045t_wo"/>`,
		"fallback": "heroicons:plus-small",
	});
}

export default Component;
