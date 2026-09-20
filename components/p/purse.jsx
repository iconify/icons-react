import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpoya23bu.css';
import '../../css/n/nx_-2jbue.css';
import '../../css/w/wh38irbon.css';
import '../../css/u/u8lneccev.css';
import '../../css/u/u4tezoh7u.css';
import '../../css/l/l1jdswbbo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/boi-1q-hs.css';
import '../../css/k/k9p16oubd.css';
import '../../css/k/k9-nfhb8z.css';
import '../../css/t/tpxc8wnsy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpoya23bu"/><path class="nx_-2jbue"/><path class="wh38irbon"/><circle class="u8lneccev"/><circle class="u4tezoh7u"/><path class="l1jdswbbo"/><g class="jn8qy4bru"><path class="boi-1q-hs"/><path class="k9p16oubd"/><circle class="k9-nfhb8z"/><path class="tpxc8wnsy"/></g>`,
		"fallback": "openmoji:purse",
	});
}

export default Component;
