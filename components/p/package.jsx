import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb_frobnd.css';
import '../../css/l/l557xacfx.css';
import '../../css/q/qqhr9r1-v.css';
import '../../css/l/ljju7f6ra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb_frobnd"/><path class="l557xacfx"/><path class="qqhr9r1-v"/><path class="ljju7f6ra"/>`,
		"fallback": "fxemoji:package",
	});
}

export default Component;
