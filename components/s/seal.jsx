import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z02wksbvu.css';
import '../../css/o/o1l3xfb8l.css';
import '../../css/j/j0ba43ftm.css';
import '../../css/v/vgrxbcbxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="z02wksbvu"/><path class="o1l3xfb8l"/><path class="j0ba43ftm"/><rect class="vgrxbcbxz"/></g>`,
		"fallback": "icon-park-solid:seal",
	});
}

export default Component;
