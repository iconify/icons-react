import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqn9w_jlc.css';
import '../../css/e/e2_8yl1ds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqn9w_jlc"/><path class="e2_8yl1ds"/>`,
		"fallback": "energy-icons:taco-48",
	});
}

export default Component;
