import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/cdvy5kbya.css';
import '../../css/y/y06nxiblq.css';
import '../../css/t/tho7co-hn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="cdvy5kbya"/><rect class="y06nxiblq"/><rect class="tho7co-hn"/></g>`,
		"fallback": "icon-park:vertical-tidy-up",
	});
}

export default Component;
