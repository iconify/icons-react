import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le9zsubzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le9zsubzt"/>`,
		"fallback": "streamline-ultimate:natural-disaster-hurricane-bold",
	});
}

export default Component;
