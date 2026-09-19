import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gnjsnbw1b.css';
import '../../css/u/u4xffmxub.css';
import '../../css/u/uowhjz5bn.css';
import '../../css/o/odcne5nfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect transform="rotate(-10 3.61 36.534)" class="gnjsnbw1b"/><path class="u4xffmxub"/><path class="uowhjz5bn"/><path class="odcne5nfd"/></g>`,
		"fallback": "icon-park:straight-razor",
	});
}

export default Component;
