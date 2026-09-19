import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apx8h3bey.css';
import '../../css/g/gxdzi5-6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="apx8h3bey"/><path class="gxdzi5-6u"/></g>`,
		"fallback": "cryptocurrency-color:poa",
	});
}

export default Component;
