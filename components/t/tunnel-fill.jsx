import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69w_s5qv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69w_s5qv"/>`,
		"fallback": "mingcute:tunnel-fill",
	});
}

export default Component;
