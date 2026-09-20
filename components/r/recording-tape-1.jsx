import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k7wvaw3sb.css';
import '../../css/v/v1yyyts6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="k7wvaw3sb"/><path class="v1yyyts6g"/></g>`,
		"fallback": "streamline-plump:recording-tape-1",
	});
}

export default Component;
