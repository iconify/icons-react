import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccbbnd11y.css';
import '../../css/s/sc5y7lboz.css';
import '../../css/y/ybmshrj6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ccbbnd11y"/><circle class="sc5y7lboz"/><path class="ybmshrj6v"/></g>`,
		"fallback": "icon-park-solid:people-safe",
	});
}

export default Component;
