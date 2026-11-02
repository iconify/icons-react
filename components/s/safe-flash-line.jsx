import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjfa6i3ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjfa6i3ef"/>`,
		"fallback": "mingcute:safe-flash-line",
	});
}

export default Component;
