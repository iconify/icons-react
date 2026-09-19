import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ypjg7bbdz.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/d/d7mhh30wi.css';
import '../../css/k/kt5shjbak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ypjg7bbdz"/><rect class="n50kjvxhj"/><path class="d7mhh30wi"/><path class="kt5shjbak"/></g>`,
		"fallback": "icon-park-solid:juice",
	});
}

export default Component;
