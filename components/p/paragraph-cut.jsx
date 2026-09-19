import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vouxnjwyh.css';
import '../../css/i/iz_gtfbhi.css';
import '../../css/e/euwvmeb7s.css';
import '../../css/b/b8pb9wbpx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vouxnjwyh"/><path class="iz_gtfbhi"/><path class="euwvmeb7s"/><path class="b8pb9wbpx"/></g>`,
		"fallback": "icon-park:paragraph-cut",
	});
}

export default Component;
