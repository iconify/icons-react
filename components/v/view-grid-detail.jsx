import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fsan3yarc.css';
import '../../css/x/xoh-v2bac.css';
import '../../css/d/d3d1cnb2j.css';
import '../../css/r/rgkpd4izd.css';
import '../../css/u/u2i66ifye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><rect class="fsan3yarc"/><path class="xoh-v2bac"/><path class="d3d1cnb2j"/><path class="rgkpd4izd"/><path class="u2i66ifye"/></g>`,
		"fallback": "icon-park:view-grid-detail",
	});
}

export default Component;
