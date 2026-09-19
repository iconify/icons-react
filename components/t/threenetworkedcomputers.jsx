import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xissgenvf.css';
import '../../css/m/m738x2bds.css';
import '../../css/x/xhd_v5y8j.css';
import '../../css/n/n3z4lqnxg.css';
import '../../css/q/qd53pdblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xissgenvf"/><path class="m738x2bds"/><path class="xhd_v5y8j"/><path class="n3z4lqnxg"/><path class="qd53pdblg"/>`,
		"fallback": "fxemoji:threenetworkedcomputers",
	});
}

export default Component;
