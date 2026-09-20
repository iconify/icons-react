import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/x1itkxbgq.css';
import '../../css/n/n54b1xycr.css';
import '../../css/y/yf3_bqbtx.css';
import '../../css/g/gyfuumb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="x1itkxbgq"/><path class="n54b1xycr"/><path class="yf3_bqbtx"/><path class="gyfuumb2p"/></g>`,
		"fallback": "streamline-sharp-color:new-sticky-note",
	});
}

export default Component;
