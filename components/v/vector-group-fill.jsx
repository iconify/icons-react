import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vshyk7bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vshyk7bsv"/>`,
		"fallback": "mingcute:vector-group-fill",
	});
}

export default Component;
