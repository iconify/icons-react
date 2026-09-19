import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geju8gabu.css';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/w/w-gz11o7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGTYbpMega" class="geju8gabu"/></defs><g class="hit3bi0-v"><use href="#SVGTYbpMega" clip-rule="evenodd"/><use href="#SVGTYbpMega" class="j-npdpb0r"/><path class="w-gz11o7m"/></g>`,
		"fallback": "icon-park-outline:up-c",
	});
}

export default Component;
