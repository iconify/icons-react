import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l9i-crb8u.css';
import '../../css/v/v752yjbjv.css';
import '../../css/y/yswqcbbmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="l9i-crb8u"/><path class="v752yjbjv"/><path class="yswqcbbmm"/></g>`,
		"fallback": "icon-park:trousers-bell-bottoms",
	});
}

export default Component;
