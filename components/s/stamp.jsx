import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i--o-zb7z.css';
import '../../css/f/f6c0wnbzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i--o-zb7z"/><circle class="f6c0wnbzz"/></g>`,
		"fallback": "icon-park-outline:stamp",
	});
}

export default Component;
