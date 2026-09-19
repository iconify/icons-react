import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/knt8s46qx.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/p/p8o016kgn.css';
import '../../css/r/roa0wac0r.css';
import '../../css/d/dflemqbwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="knt8s46qx"/><path class="rgpfwjbgz"/><path class="p8o016kgn"/><path class="roa0wac0r"/><path class="dflemqbwa"/></g>`,
		"fallback": "icon-park:upload-computer",
	});
}

export default Component;
