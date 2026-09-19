import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wnuo3bejw.css';
import '../../css/z/zuxintbbc.css';
import '../../css/u/ux16ifpyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="wnuo3bejw"/><path class="zuxintbbc"/><path class="ux16ifpyr"/></g>`,
		"fallback": "icon-park-outline:lamp",
	});
}

export default Component;
