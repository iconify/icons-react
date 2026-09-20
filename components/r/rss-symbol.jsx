import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/s3j7f6aop.css';
import '../../css/w/wg5m50buy.css';
import '../../css/t/tvuys3bkt.css';
import '../../css/r/rx371jblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="s3j7f6aop"/><path class="wg5m50buy"/><path class="tvuys3bkt"/><path class="rx371jblt"/></g>`,
		"fallback": "streamline-sharp-color:rss-symbol",
	});
}

export default Component;
