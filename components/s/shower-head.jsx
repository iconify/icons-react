import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sboli8e2u.css';
import '../../css/o/opxuyt77v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="sboli8e2u"/><path class="opxuyt77v"/></g>`,
		"fallback": "icon-park-solid:shower-head",
	});
}

export default Component;
