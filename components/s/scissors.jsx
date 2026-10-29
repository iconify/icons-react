import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z75kw-b6j.css';
import '../../css/t/thhb5jvkd.css';
import '../../css/p/p6qe0dtvu.css';
import '../../css/g/g43g2-bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k z75kw-b6j"/><path class="thhb5jvkd wm-k"/><path class="p6qe0dtvu wm-k"/><path class="g43g2-bnc wm-a"/>`,
		"fallback": "withicons-bauhaus:scissors",
	});
}

export default Component;
