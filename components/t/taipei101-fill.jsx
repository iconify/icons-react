import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5mc_5_lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5mc_5_lg"/>`,
		"fallback": "mingcute:taipei101-fill",
	});
}

export default Component;
