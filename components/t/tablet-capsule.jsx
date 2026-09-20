import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pz7crjbxp.css';
import '../../css/a/ai3cb-bmd.css';
import '../../css/p/p4d1z1b2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="pz7crjbxp"/><path class="ai3cb-bmd"/><path class="p4d1z1b2u"/></g>`,
		"fallback": "streamline-plump-color:tablet-capsule",
	});
}

export default Component;
