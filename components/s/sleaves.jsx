import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ggynh4b_z.css';
import '../../css/t/t53mxxxsl.css';
import '../../css/l/lxy-g9oau.css';
import '../../css/n/n53oc1b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ggynh4b_z"/><path class="t53mxxxsl"/><path class="lxy-g9oau"/><path class="n53oc1b7f"/></g>`,
		"fallback": "icon-park:sleaves",
	});
}

export default Component;
