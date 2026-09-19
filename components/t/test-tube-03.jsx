import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vhhn7sf4c.css';
import '../../css/j/jpe9a_1ci.css';
import '../../css/c/c2r4yob4m.css';
import '../../css/g/glza9bc4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vhhn7sf4c"/><path class="jpe9a_1ci"/><path class="c2r4yob4m"/><path class="glza9bc4j"/></g>`,
		"fallback": "hugeicons:test-tube-03",
	});
}

export default Component;
