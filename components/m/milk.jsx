import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qo_6ijmqf.css';
import '../../css/p/pic726iix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qo_6ijmqf"/><path class="pic726iix"/></g>`,
		"fallback": "icon-park-outline:milk",
	});
}

export default Component;
