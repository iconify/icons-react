import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu6nytwut.css';
import '../../css/d/dt8zsopdi.css';
import '../../css/p/pg98fbbdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu6nytwut"/><path class="dt8zsopdi"/><path class="pg98fbbdj"/>`,
		"fallback": "selfhst:ksuite-docs-light",
	});
}

export default Component;
