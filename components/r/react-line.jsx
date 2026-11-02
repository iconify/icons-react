import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgfaa5b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgfaa5b0g"/>`,
		"fallback": "mingcute:react-line",
	});
}

export default Component;
