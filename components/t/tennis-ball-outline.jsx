import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui42f08vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui42f08vj"/>`,
		"fallback": "mdi:tennis-ball-outline",
	});
}

export default Component;
