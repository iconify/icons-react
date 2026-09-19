import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hgt__cbcr.css';
import '../../css/b/bz2tnjbek.css';
import '../../css/x/xqm6y8bvi.css';
import '../../css/s/smfp-xbkt.css';
import '../../css/n/n9x4pt7yo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="hgt__cbcr"/><path class="bz2tnjbek"/><path class="xqm6y8bvi"/><path class="smfp-xbkt"/><path class="n9x4pt7yo"/></g>`,
		"fallback": "icon-park:water-rate",
	});
}

export default Component;
