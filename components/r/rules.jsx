import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdo2oulen.css';
import '../../css/n/nfkakzbeb.css';
import '../../css/q/qd5b0vbwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdo2oulen"/><path class="nfkakzbeb"/><path class="qd5b0vbwc"/>`,
		"fallback": "flat-color-icons:rules",
	});
}

export default Component;
