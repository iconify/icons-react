import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/ln41zjkly.css';
import '../../css/f/f6c0wnbzz.css';
import '../../css/i/igx57ccmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ln41zjkly"/><circle class="f6c0wnbzz"/><path class="igx57ccmj"/></g>`,
		"fallback": "icon-park-outline:iron-disable",
	});
}

export default Component;
