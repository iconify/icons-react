import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-6ltnuzp.css';
import '../../css/d/ddmo6vb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g-6ltnuzp"/><path class="ddmo6vb0r"/></g>`,
		"fallback": "streamline-sharp:tooth",
	});
}

export default Component;
