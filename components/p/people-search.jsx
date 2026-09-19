import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/t/tsr0sjbtq.css';
import '../../css/u/u41u4768t.css';
import '../../css/l/l0121-nyj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="nzul_zbqb"/><path class="tsr0sjbtq"/><path class="u41u4768t"/><path class="l0121-nyj"/></g>`,
		"fallback": "icon-park:people-search",
	});
}

export default Component;
