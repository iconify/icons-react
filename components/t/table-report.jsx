import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/h2x85ibqa.css';
import '../../css/o/oe88u2rpk.css';
import '../../css/h/ha_cvsbnj.css';
import '../../css/f/flowo9b7u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="h2x85ibqa"/><path class="oe88u2rpk"/><path class="ha_cvsbnj"/><path class="flowo9b7u"/></g>`,
		"fallback": "icon-park:table-report",
	});
}

export default Component;
