import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk-p67bej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk-p67bej"/>`,
		"fallback": "streamline:smiley-nauseas-solid",
	});
}

export default Component;
