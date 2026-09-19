import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lceuthzyh.css';
import '../../css/b/b3k15qlvh.css';
import '../../css/y/yfb-08php.css';
import '../../css/u/u6av8yx7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="lceuthzyh"/><path class="b3k15qlvh"/><path class="yfb-08php"/><path class="u6av8yx7x"/></g>`,
		"fallback": "icon-park:micro-sd",
	});
}

export default Component;
