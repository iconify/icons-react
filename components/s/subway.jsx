import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b79z_ipds.css';
import '../../css/j/jma2uubte.css';
import '../../css/p/pcr75dyvp.css';
import '../../css/p/pf331wbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="b79z_ipds"/><circle class="jma2uubte"/><circle class="pcr75dyvp"/><path class="pf331wbkg"/></g>`,
		"fallback": "icon-park-outline:subway",
	});
}

export default Component;
