import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y5f1ucbki.css';
import '../../css/z/zfouoybeb.css';
import '../../css/c/c8tjlaclr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y5f1ucbki"/><path class="zfouoybeb"/><path class="c8tjlaclr"/></g>`,
		"fallback": "icon-park-solid:lotion",
	});
}

export default Component;
