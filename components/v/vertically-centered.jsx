import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/ms27-ub9z.css';
import '../../css/f/f86-bwprj.css';
import '../../css/c/czqk2mbmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ms27-ub9z"/><path class="f86-bwprj"/><path class="czqk2mbmp"/></g>`,
		"fallback": "icon-park-outline:vertically-centered",
	});
}

export default Component;
