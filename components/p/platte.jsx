import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/ziae3bb2o.css';
import '../../css/v/vy88app5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ziae3bb2o"/><path class="vy88app5s"/></g>`,
		"fallback": "icon-park-outline:platte",
	});
}

export default Component;
