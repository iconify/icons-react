import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jxr8m2bzo.css';
import '../../css/w/w-ivl6c7l.css';
import '../../css/o/o2u4fe-pd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jxr8m2bzo"/><path class="w-ivl6c7l"/><path class="o2u4fe-pd"/></g>`,
		"fallback": "icon-park-outline:vertical-timeline",
	});
}

export default Component;
