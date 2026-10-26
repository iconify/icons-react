import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/u4ksbsbta.css';
import '../../css/b/bg9sthewt.css';
import '../../css/o/oc2p_nmmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="u4ksbsbta"/><path class="bg9sthewt"/><path class="oc2p_nmmq"/></g>`,
		"fallback": "doodle-icons:sunflower",
	});
}

export default Component;
