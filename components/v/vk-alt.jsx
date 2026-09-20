import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxwr-bxls.css';
import '../../css/c/citlv-btt.css';
import '../../css/q/qpac77bkh.css';
import '../../css/j/jidhs7d5l.css';
import '../../css/n/nn93icb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxwr-bxls"/><path class="citlv-btt"/><path class="qpac77bkh"/><path class="jidhs7d5l"/><path class="nn93icb1i"/>`,
		"fallback": "uim:vk-alt",
	});
}

export default Component;
