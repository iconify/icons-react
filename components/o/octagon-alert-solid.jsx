import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnppv9g-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnppv9g-g"/>`,
		"fallback": "iconaut:octagon-alert-solid",
	});
}

export default Component;
