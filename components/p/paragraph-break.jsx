import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vouxnjwyh.css';
import '../../css/i/iz_gtfbhi.css';
import '../../css/z/z_cpbwxzw.css';
import '../../css/x/xvymiabkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vouxnjwyh"/><path class="iz_gtfbhi"/><path class="z_cpbwxzw"/><path class="xvymiabkf"/></g>`,
		"fallback": "icon-park:paragraph-break",
	});
}

export default Component;
