import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x03m03b7g.css';
import '../../css/p/pi8np5bgj.css';
import '../../css/u/umb8f1b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x03m03b7g"/><path class="pi8np5bgj"/><path class="umb8f1b3x"/></g>`,
		"fallback": "hugeicons:row-delete",
	});
}

export default Component;
