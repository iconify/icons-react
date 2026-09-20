import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o1z2wccdo.css';
import '../../css/o/oq6o08blu.css';
import '../../css/k/kscen10md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o1z2wccdo"/><path class="oq6o08blu"/><path class="kscen10md"/></g>`,
		"fallback": "streamline-sharp:speaker-1",
	});
}

export default Component;
