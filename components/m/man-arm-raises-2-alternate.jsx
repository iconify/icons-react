import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p3n2n6afo.css';
import '../../css/q/qdcklghga.css';
import '../../css/o/osld-wb5b.css';
import '../../css/d/d1gdinb8l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p3n2n6afo"/><path class="qdcklghga"/><path class="osld-wb5b"/><path class="d1gdinb8l"/></g>`,
		"fallback": "streamline-plump-color:man-arm-raises-2-alternate",
	});
}

export default Component;
