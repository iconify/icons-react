import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/iufgpxbcf.css';
import '../../css/b/b-i2hybmk.css';
import '../../css/n/nfovc7bjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="iufgpxbcf"/><path class="b-i2hybmk"/><path class="nfovc7bjf"/></g>`,
		"fallback": "icon-park-solid:people-search",
	});
}

export default Component;
