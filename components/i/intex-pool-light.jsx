import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5dc43kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5dc43kd"/>`,
		"fallback": "cbi:intex-pool-light",
	});
}

export default Component;
