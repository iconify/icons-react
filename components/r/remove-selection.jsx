import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jla2z_f0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jla2z_f0g"/>`,
		"fallback": "iconoir:remove-selection",
	});
}

export default Component;
