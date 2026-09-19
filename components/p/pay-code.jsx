import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ypq84ib1f.css';
import '../../css/i/ixe451mff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ypq84ib1f"/><path class="ixe451mff"/></g>`,
		"fallback": "icon-park-outline:pay-code",
	});
}

export default Component;
