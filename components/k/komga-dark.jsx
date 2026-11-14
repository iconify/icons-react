import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blnjp86xq.css';
import '../../css/p/p0u6a5hnt.css';
import '../../css/e/e420htnov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blnjp86xq"/><path class="p0u6a5hnt"/><path class="e420htnov"/>`,
		"fallback": "selfhst:komga-dark",
	});
}

export default Component;
