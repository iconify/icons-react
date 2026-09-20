import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yzpi-obeg.css';
import '../../css/j/jmt9yfome.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yzpi-obeg"/><path class="jmt9yfome"/></g>`,
		"fallback": "streamline-plump:lock-comment-security-solid",
	});
}

export default Component;
