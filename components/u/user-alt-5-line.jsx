import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywm9fhb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywm9fhb0w"/>`,
		"fallback": "si:user-alt-5-line",
	});
}

export default Component;
