import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bslyux_4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bslyux_4g"/>`,
		"fallback": "ix:star",
	});
}

export default Component;
