import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vwnp3il7p.css';
import '../../css/a/axya0fz6f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vwnp3il7p"/><path class="axya0fz6f"/></g>`,
		"fallback": "cryptocurrency-color:oot",
	});
}

export default Component;
