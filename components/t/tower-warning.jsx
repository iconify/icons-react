import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ftitpkhye.css';
import '../../css/l/lkw2shx8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ftitpkhye"/><path class="lkw2shx8u"/></g>`,
		"fallback": "iconoir:tower-warning",
	});
}

export default Component;
