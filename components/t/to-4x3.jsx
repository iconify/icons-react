import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/n53hu8xtg.css';
import '../../css/k/kux23acru.css';
import '../../css/i/iw2ko0b_c.css';
import '../../css/w/wtj0htkdo.css';
import '../../css/v/v34eu8bxj.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="n53hu8xtg"/><path class="kux23acru"/><g class="iw2ko0b_c"><path class="wtj0htkdo"/><path class="v34eu8bxj"/></g></g>`,
		"fallback": "flag:to-4x3",
	});
}

export default Component;
