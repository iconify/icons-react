import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yomxfr7rx.css';
import '../../css/a/aq815yc3w.css';
import '../../css/a/asie7vbxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="yomxfr7rx"/><path class="aq815yc3w"/><path class="asie7vbxk"/></g>`,
		"fallback": "streamline-plump:usb-port",
	});
}

export default Component;
