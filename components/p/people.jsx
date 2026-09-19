import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/h/hy_bunouy.css';
import '../../css/k/k36ojmfhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="hy_bunouy"/><path class="k36ojmfhz"/></g>`,
		"fallback": "icon-park:people",
	});
}

export default Component;
