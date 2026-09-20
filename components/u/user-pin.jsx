import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zcd6sob0c.css';
import '../../css/h/h4_bsz-2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zcd6sob0c"/><path class="h4_bsz-2e"/></g>`,
		"fallback": "streamline-plump:user-pin",
	});
}

export default Component;
