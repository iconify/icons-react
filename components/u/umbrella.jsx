import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xopesd3iw.css';
import '../../css/s/smf_smbgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xopesd3iw"/><path class="smf_smbgh"/></g>`,
		"fallback": "icon-park-solid:umbrella",
	});
}

export default Component;
