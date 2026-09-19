import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w37h81bqn.css';
import '../../css/c/ccl9t3mye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w37h81bqn"/><path class="ccl9t3mye"/>`,
		"fallback": "bitcoin-icons:pie-chart-filled",
	});
}

export default Component;
