import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fsan3yarc.css';
import '../../css/x/xbrl61bjm.css';
import '../../css/i/ij9ahfbvg.css';
import '../../css/p/psrkgsbww.css';
import '../../css/x/xoh-v2bac.css';
import '../../css/d/d3d1cnb2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><rect class="fsan3yarc"/><rect class="xbrl61bjm"/><path class="ij9ahfbvg"/><path class="psrkgsbww"/><path class="xoh-v2bac"/><path class="d3d1cnb2j"/></g>`,
		"fallback": "icon-park:view-grid-list",
	});
}

export default Component;
