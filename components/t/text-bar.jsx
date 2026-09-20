import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssc-nkb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssc-nkb7m"/>`,
		"fallback": "streamline-sharp-color:text-bar",
	});
}

export default Component;
