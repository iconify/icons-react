import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fsan3yarc.css';
import '../../css/l/l5tjo4bak.css';
import '../../css/x/xbrl61bjm.css';
import '../../css/e/ed8432ijo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><rect class="fsan3yarc"/><rect class="l5tjo4bak"/><rect class="xbrl61bjm"/><rect class="ed8432ijo"/></g>`,
		"fallback": "icon-park:view-grid-card",
	});
}

export default Component;
