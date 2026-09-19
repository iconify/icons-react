import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zio0--bwu.css';
import '../../css/h/hdbq3cbgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zio0--bwu"/><path class="hdbq3cbgp"/></g>`,
		"fallback": "icon-park-outline:umbrella-two",
	});
}

export default Component;
