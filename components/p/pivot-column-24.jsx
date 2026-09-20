import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jff5k-bht.css';
import '../../css/t/tpx4xacpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jff5k-bht"/><path class="tpx4xacpu"/>`,
		"fallback": "octicon:pivot-column-24",
	});
}

export default Component;
