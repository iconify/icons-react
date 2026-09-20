import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4a8etro.css';
import '../../css/n/nwj7terdc.css';
import '../../css/l/lh639nb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4a8etro"/><path class="nwj7terdc"/><path class="lh639nb9b"/>`,
		"fallback": "prime:sort-numeric-down",
	});
}

export default Component;
