import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvyne8bgw.css';
import '../../css/z/zeqclcbxs.css';
import '../../css/i/ipw49hbcc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvyne8bgw"/><path class="zeqclcbxs"/><path class="ipw49hbcc"/>`,
		"fallback": "devicon:taskade-wordmark",
	});
}

export default Component;
