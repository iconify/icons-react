import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mx8-48i7a.css';
import '../../css/o/o1ic8yb3p.css';
import '../../css/j/jewv0ybko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mx8-48i7a"/><path class="o1ic8yb3p"/><path class="jewv0ybko"/></g>`,
		"fallback": "hugeicons:text-italic-slash",
	});
}

export default Component;
