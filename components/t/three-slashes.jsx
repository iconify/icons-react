import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/fe76870ub.css';
import '../../css/k/kn3ze0bti.css';
import '../../css/c/c3lurtbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="fe76870ub"/><path class="kn3ze0bti"/><path class="c3lurtbix"/></g>`,
		"fallback": "icon-park:three-slashes",
	});
}

export default Component;
