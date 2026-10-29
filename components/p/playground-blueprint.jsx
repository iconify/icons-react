import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n2e9gzhha.css';
import '../../css/w/wbmwqdh8m.css';
import '../../css/p/p9icysbnd.css';
import '../../css/u/uoi7kccyu.css';
import '../../css/w/w-8p90bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n2e9gzhha wm-deco"/><path class="wbmwqdh8m wm-deco"/><path class="p9icysbnd wm-deco"/><path class="uoi7kccyu"/><path class="w-8p90bcf"/></g>`,
		"fallback": "withicons:playground-blueprint",
	});
}

export default Component;
