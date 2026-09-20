import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmqh-0qpd.css';
import '../../css/q/qwvx9db4n.css';
import '../../css/v/v-nzsibot.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmqh-0qpd"/><path class="qwvx9db4n"/><path class="v-nzsibot"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:true-south-antarctica-flag",
	});
}

export default Component;
