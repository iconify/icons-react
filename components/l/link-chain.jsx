import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f6jwgdbmb.css';
import '../../css/v/vbgtpab3l.css';
import '../../css/s/s-fsh86iu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="f6jwgdbmb"/><path class="vbgtpab3l"/><path class="s-fsh86iu"/></g>`,
		"fallback": "streamline-plump:link-chain",
	});
}

export default Component;
