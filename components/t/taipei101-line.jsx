import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmc3nbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfmc3nbqo"/>`,
		"fallback": "mingcute:taipei101-line",
	});
}

export default Component;
