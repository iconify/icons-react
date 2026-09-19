import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0585hlis.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0585hlis"/>`,
		"fallback": "codicon:pass-compact",
	});
}

export default Component;
