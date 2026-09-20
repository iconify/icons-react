import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kh9rsjb-p.css';
import '../../css/h/hqs9gt-qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kh9rsjb-p"/><path class="hqs9gt-qf"/></g>`,
		"fallback": "streamline-sharp:share-time",
	});
}

export default Component;
