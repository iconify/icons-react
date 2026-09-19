import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lzjjxkbyz.css';
import '../../css/y/yss21zg5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lzjjxkbyz"/><path class="yss21zg5a"/></g>`,
		"fallback": "icon-park-outline:message-emoji",
	});
}

export default Component;
