import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/i/iqaipz0-o.css';
import '../../css/b/bfyhr_b7o.css';
import '../../css/q/qkdmrwb3w.css';
import '../../css/b/bxtpaibbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="iqaipz0-o"/><path class="bfyhr_b7o"/><path class="qkdmrwb3w"/><path class="bxtpaibbv"/></g>`,
		"fallback": "icon-park:treadmill",
	});
}

export default Component;
