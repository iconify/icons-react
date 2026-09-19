import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek80r3bjn.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek80r3bjn"/>`,
		"fallback": "fontisto:raspberry-pi",
	});
}

export default Component;
