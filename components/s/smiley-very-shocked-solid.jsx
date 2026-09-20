import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxw-lso_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxw-lso_l"/>`,
		"fallback": "streamline:smiley-very-shocked-solid",
	});
}

export default Component;
