import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/krf5xhbsy.css';
import '../../css/s/s3s-3kesx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="krf5xhbsy"/><path class="s3s-3kesx"/></g>`,
		"fallback": "icon-park:necktie",
	});
}

export default Component;
