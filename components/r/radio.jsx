import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jduyn0-zh.css';
import '../../css/m/mkolcyb2z.css';
import '../../css/f/f81lr3bmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="jduyn0-zh"/><circle class="mkolcyb2z"/><path class="f81lr3bmn"/></g>`,
		"fallback": "icon-park-outline:radio",
	});
}

export default Component;
