import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wv7hz7bka.css';
import '../../css/i/igg67cc-w.css';
import '../../css/l/lf4i-tb8e.css';
import '../../css/j/j5t7prbbu.css';
import '../../css/y/y-wnkqlcj.css';
import '../../css/p/p-dhsobmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wv7hz7bka"/><path class="igg67cc-w"/><path class="lf4i-tb8e"/><path class="j5t7prbbu"/><path class="y-wnkqlcj"/><path class="p-dhsobmh"/></g>`,
		"fallback": "icon-park:rotating-add",
	});
}

export default Component;
