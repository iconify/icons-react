import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gouepqbxb.css';
import '../../css/o/opxuyt77v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="gouepqbxb"/><path class="opxuyt77v"/></g>`,
		"fallback": "icon-park-outline:shower-head",
	});
}

export default Component;
