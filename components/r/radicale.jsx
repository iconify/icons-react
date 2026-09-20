import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao7ajn3e.css';
import '../../css/o/o7ez-hcvc.css';
import '../../css/p/pizmkwbbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao7ajn3e"/><path class="o7ez-hcvc"/><path class="pizmkwbbf"/>`,
		"fallback": "selfhst:radicale",
	});
}

export default Component;
