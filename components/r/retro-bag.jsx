import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rf2qvebmu.css';
import '../../css/i/ilj9p1g-d.css';
import '../../css/c/c0njsobpg.css';
import '../../css/l/lfsq1wbib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rf2qvebmu"/><path class="ilj9p1g-d"/><path class="c0njsobpg"/><rect class="lfsq1wbib"/></g>`,
		"fallback": "icon-park:retro-bag",
	});
}

export default Component;
