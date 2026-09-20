import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6lp2beq.css';
import '../../css/m/m74onmbrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6lp2beq"/><path class="m74onmbrl"/>`,
		"fallback": "selfhst:phpsysinfo-light",
	});
}

export default Component;
