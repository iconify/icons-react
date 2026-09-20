import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0ce-xmes.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0ce-xmes"/>`,
		"fallback": "streamline:interface-arrows-downright-corner-arrow-corner-down-right-downright",
	});
}

export default Component;
