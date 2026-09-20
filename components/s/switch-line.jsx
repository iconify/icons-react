import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a46wson3l.css';
import '../../css/u/uwyl_bc5s.css';
import '../../css/t/trx7e_e5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a46wson3l"/><path class="uwyl_bc5s"/><path class="trx7e_e5l"/>`,
		"fallback": "mingcute:switch-line",
	});
}

export default Component;
