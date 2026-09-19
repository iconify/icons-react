import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/h/hy6yzlbvz.css';
import '../../css/z/zsls1eb-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="kb9zbkb1z"/><path class="hy6yzlbvz"/><path class="zsls1eb-j"/></g>`,
		"fallback": "icon-park-outline:jewelry",
	});
}

export default Component;
