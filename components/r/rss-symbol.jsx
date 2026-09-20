import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocqchfxxl.css';
import '../../css/b/b5b9-eacu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ocqchfxxl"/><path class="b5b9-eacu"/></g>`,
		"fallback": "streamline-sharp:rss-symbol",
	});
}

export default Component;
