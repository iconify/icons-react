import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/ud346qbgg.css';
import '../../css/y/yoqf1yb8m.css';
import '../../css/y/yt7j_blda.css';
import '../../css/y/yq00dubum.css';
import '../../css/m/m7vm87ysw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ud346qbgg"/><path class="yoqf1yb8m"/><path class="yt7j_blda"/><path class="yq00dubum"/><rect class="m7vm87ysw"/></g>`,
		"fallback": "icon-park:treadmill-two",
	});
}

export default Component;
