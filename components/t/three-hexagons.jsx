import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/a/a4d9ngb1e.css';
import '../../css/u/u-p8-vvkm.css';
import '../../css/t/tziv2vbmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="a4d9ngb1e"/><path class="u-p8-vvkm"/><path class="tziv2vbmc"/></g>`,
		"fallback": "icon-park:three-hexagons",
	});
}

export default Component;
