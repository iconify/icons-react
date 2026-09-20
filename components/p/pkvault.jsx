import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpeqg5n3y.css';
import '../../css/o/ox5yvjbxk.css';
import '../../css/x/xy9g--g5g.css';
import '../../css/q/qimo3wbht.css';
import '../../css/z/zkjmso1sr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpeqg5n3y"/><path class="ox5yvjbxk"/><path class="xy9g--g5g"/><path class="qimo3wbht"/><circle class="zkjmso1sr"/>`,
		"fallback": "selfhst:pkvault",
	});
}

export default Component;
