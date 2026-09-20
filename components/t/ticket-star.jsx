import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwc9rikkw.css';
import '../../css/h/hgij-5qau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wwc9rikkw"/><path class="hgij-5qau"/></g>`,
		"fallback": "streamline-sharp:ticket-star",
	});
}

export default Component;
