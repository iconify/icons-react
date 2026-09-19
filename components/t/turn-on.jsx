import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpvb-o6bq.css';
import '../../css/d/dsi1pmbus.css';
import '../../css/w/waumx2bcm.css';
import '../../css/g/grd4zezfg.css';
import '../../css/w/wgsf-seru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rpvb-o6bq"><path class="dsi1pmbus"/><path class="waumx2bcm"/><path class="grd4zezfg"/><path class="wgsf-seru"/></g>`,
		"fallback": "icon-park:turn-on",
	});
}

export default Component;
