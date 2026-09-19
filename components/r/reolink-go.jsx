import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rflrhl7ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rflrhl7ej"/>`,
		"fallback": "cbi:reolink-go",
	});
}

export default Component;
