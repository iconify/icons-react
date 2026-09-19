import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgd6yb9-y.css';
import '../../css/w/wazow3b1r.css';
import '../../css/s/s89r_abgl.css';
import '../../css/p/ptfkqx5cc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgd6yb9-y"/><rect class="wazow3b1r"/><rect class="s89r_abgl"/><path class="ptfkqx5cc"/></g>`,
		"fallback": "icon-park:projector-one",
	});
}

export default Component;
