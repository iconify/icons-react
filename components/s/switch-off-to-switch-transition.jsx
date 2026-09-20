import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g36zgr.css';
import '../../css/d/dg35tf.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g36zgr"/><circle class="dg35tf"/>`,
		"fallback": "line-md:switch-off-to-switch-transition",
	});
}

export default Component;
