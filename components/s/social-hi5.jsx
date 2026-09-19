import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu1o-cjme.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu1o-cjme"/>`,
		"fallback": "foundation:social-hi5",
	});
}

export default Component;
