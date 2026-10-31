import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ultbcim.css';
import '../../css/c/cpvfcjbza.css';
import '../../css/j/jy3omdbnr.css';
import '../../css/h/hq2cko65l.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ultbcim"/><path class="cpvfcjbza"/><path class="jy3omdbnr"/><path class="hq2cko65l"/>`,
		"fallback": "tabler-flags:saint-lucia",
	});
}

export default Component;
