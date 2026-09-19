import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-tfk4b0x.css';
import '../../css/p/pw5mvnkum.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-tfk4b0x"/><path class="pw5mvnkum"/></g>`,
		"fallback": "glyphs:lightning-outline",
	});
}

export default Component;
