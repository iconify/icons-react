import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhohc86ec.css';
import '../../css/c/c9c69accn.css';
import '../../css/p/pev60w0wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhohc86ec"/><path class="c9c69accn"/><path class="pev60w0wp"/>`,
		"fallback": "streamline-ultimate:ticket-add-bold",
	});
}

export default Component;
