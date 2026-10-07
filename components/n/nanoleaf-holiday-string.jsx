import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxfqqg3ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxfqqg3ds"/>`,
		"fallback": "cbi:nanoleaf-holiday-string",
	});
}

export default Component;
