import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f2czm7m8z.css';
import '../../css/r/rk0ci9b5a.css';
import '../../css/z/zgipi4gzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="f2czm7m8z"/><path class="rk0ci9b5a"/><path class="zgipi4gzm"/></g>`,
		"fallback": "icon-park-solid:mind-mapping",
	});
}

export default Component;
