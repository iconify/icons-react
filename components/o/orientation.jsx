import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea4t3sg4a.css';
import '../../css/t/t-4jncuxe.css';
import '../../css/y/y9gfqabgl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea4t3sg4a"/><path class="t-4jncuxe"/><path class="y9gfqabgl"/>`,
		"fallback": "vaadin:orientation",
	});
}

export default Component;
