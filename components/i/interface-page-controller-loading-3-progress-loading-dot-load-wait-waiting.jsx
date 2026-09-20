import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o5grrub_r.css';
import '../../css/y/yzdilks9k.css';
import '../../css/h/h57yr_qmb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="o5grrub_r"/><circle class="yzdilks9k"/><circle class="h57yr_qmb"/></g>`,
		"fallback": "streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting",
	});
}

export default Component;
