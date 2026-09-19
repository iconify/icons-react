import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4i4jqjrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4i4jqjrq"/>`,
		"fallback": "cbi:prusa-mk4",
	});
}

export default Component;
