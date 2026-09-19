import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptp-sctlm.css';
import '../../css/v/vx-b6wt5v.css';
import '../../css/f/fa8k6ybxx.css';
import '../../css/q/qacc537nh.css';
import '../../css/p/pwddzki1c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptp-sctlm"/><path class="vx-b6wt5v"/><path class="fa8k6ybxx"/><path class="qacc537nh"/><path class="pwddzki1c"/>`,
		"fallback": "devicon:slack-wordmark",
	});
}

export default Component;
