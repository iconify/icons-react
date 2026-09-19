import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/beu9ed8lh.css';
import '../../css/k/ktbh9sb3d.css';
import '../../css/c/c29zywcqy.css';
import '../../css/e/e6pgh-soq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="beu9ed8lh"/><circle class="ktbh9sb3d"/><rect class="c29zywcqy"/><path class="e6pgh-soq"/></g>`,
		"fallback": "icon-park:remote-control",
	});
}

export default Component;
