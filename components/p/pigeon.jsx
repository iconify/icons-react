import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvkdycnpc.css';
import '../../css/w/w6zf6ob7d.css';
import '../../css/v/vwafq0btx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hvkdycnpc"/><path class="w6zf6ob7d"/><circle class="vwafq0btx"/></g>`,
		"fallback": "icon-park-outline:pigeon",
	});
}

export default Component;
