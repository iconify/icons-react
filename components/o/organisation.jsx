import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy8t_d1rc.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy8t_d1rc"/>`,
		"fallback": "ps:organisation",
	});
}

export default Component;
