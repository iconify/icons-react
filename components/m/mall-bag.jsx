import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/glcjunb5u.css';
import '../../css/d/de8dzpspb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="glcjunb5u"/><path class="de8dzpspb"/></g>`,
		"fallback": "icon-park-outline:mall-bag",
	});
}

export default Component;
