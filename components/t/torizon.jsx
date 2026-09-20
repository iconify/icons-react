import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irdjhwb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irdjhwb2o"/>`,
		"fallback": "thesvg-color:torizon",
	});
}

export default Component;
