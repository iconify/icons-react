import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/r6jxgebue.css';
import '../../css/a/a7oce5bvd.css';
import '../../css/h/hnnvz45cz.css';
import '../../css/s/segv2ibyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="r6jxgebue"/><path class="a7oce5bvd"/><path class="hnnvz45cz"/><circle class="segv2ibyl"/></g>`,
		"fallback": "icon-park:sunset",
	});
}

export default Component;
