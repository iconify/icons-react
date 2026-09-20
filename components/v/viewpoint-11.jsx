import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drvx3jbdw.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drvx3jbdw"/>`,
		"fallback": "maki:viewpoint-11",
	});
}

export default Component;
