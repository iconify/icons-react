import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iiabrvj1h.css';
import '../../css/o/o0sd3mb7s.css';
import '../../css/x/xezu5da1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="iiabrvj1h"/><path class="o0sd3mb7s"/><path class="xezu5da1x"/></g>`,
		"fallback": "doodle-icons:rose",
	});
}

export default Component;
