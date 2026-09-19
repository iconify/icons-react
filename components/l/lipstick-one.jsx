import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/f1e6itz1y.css';
import '../../css/r/relv2qoph.css';
import '../../css/y/y6_hf6fcx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="f1e6itz1y"/><rect transform="rotate(45 28.121 13.808)" class="relv2qoph"/><rect transform="rotate(45 15.394 23.707)" class="y6_hf6fcx"/></g>`,
		"fallback": "icon-park:lipstick-one",
	});
}

export default Component;
