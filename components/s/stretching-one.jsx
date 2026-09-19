import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b62w8-blj.css';
import '../../css/k/kdtf-mbyl.css';
import '../../css/c/cj23v815o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="b62w8-blj"/><path class="kdtf-mbyl"/><path class="cj23v815o"/></g>`,
		"fallback": "icon-park:stretching-one",
	});
}

export default Component;
