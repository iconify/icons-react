import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gee7l6brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gee7l6brv"/>`,
		"fallback": "streamline-sharp:phone-pen-2",
	});
}

export default Component;
