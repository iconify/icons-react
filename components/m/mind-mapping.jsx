import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gx_95itmz.css';
import '../../css/z/zgipi4gzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gx_95itmz"/><path class="zgipi4gzm"/></g>`,
		"fallback": "icon-park-outline:mind-mapping",
	});
}

export default Component;
