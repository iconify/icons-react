import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wnpdscbti.css';
import '../../css/w/wbi300b9a.css';
import '../../css/u/uknym9pqu.css';
import '../../css/x/xg8jp6das.css';
import '../../css/o/op-w_vrls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wnpdscbti"/><path class="wbi300b9a"/><path class="uknym9pqu"/><path class="xg8jp6das"/><path class="op-w_vrls"/></g>`,
		"fallback": "icon-park:paragraph-triangle",
	});
}

export default Component;
