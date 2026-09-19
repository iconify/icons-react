import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qbtjsobxy.css';
import '../../css/r/rl4wv9bhm.css';
import '../../css/s/sf1qombsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qbtjsobxy"/><path class="rl4wv9bhm"/><path class="sf1qombsw"/></g>`,
		"fallback": "hugeicons:mailbox-01",
	});
}

export default Component;
