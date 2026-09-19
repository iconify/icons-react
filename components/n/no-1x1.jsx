import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6e3-5bus.css';
import '../../css/d/dxcl0tb7m.css';
import '../../css/i/iufaf7g1w.css';
import '../../css/x/xj85fqn8n.css';
import '../../css/k/kbkdv3xcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6e3-5bus"/><path class="dxcl0tb7m"/><path class="iufaf7g1w"/><path class="xj85fqn8n"/><path class="kbkdv3xcu"/>`,
		"fallback": "flag:no-1x1",
	});
}

export default Component;
