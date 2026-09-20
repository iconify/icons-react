import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y8d1qvbld.css';
import '../../css/a/alahm_ivu.css';
import '../../css/p/psajsebiz.css';
import '../../css/p/pwt_h5bhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="y8d1qvbld"/><path class="alahm_ivu"/><path class="psajsebiz"/><path class="pwt_h5bhh"/></g>`,
		"fallback": "streamline-plump-color:mail-send",
	});
}

export default Component;
