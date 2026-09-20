import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trwfcmb-c.css';
import '../../css/j/jzu0kxbzr.css';
import '../../css/m/m98y19b0m.css';
import '../../css/v/vhalmib7e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s88w27byo.css';
import '../../css/e/e56qzo2wu.css';
import '../../css/g/gno4obbac.css';
import '../../css/x/xig8mrbbu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="trwfcmb-c"/><circle class="jzu0kxbzr"/><circle class="m98y19b0m"/><path class="vhalmib7e"/><g class="jn8qy4bru"><path class="s88w27byo"/><path class="e56qzo2wu"/><path class="gno4obbac"/><path class="xig8mrbbu"/></g>`,
		"fallback": "openmoji:three-finger-operation",
	});
}

export default Component;
