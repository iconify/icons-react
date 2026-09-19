import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bo9eyfb6n.css';
import '../../css/p/pqm3hzbbw.css';
import '../../css/s/sakh24bxz.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="bo9eyfb6n"/><path class="pqm3hzbbw"/><path class="sakh24bxz"/><path class="c1t--rtgz"/></g>`,
		"fallback": "icon-park:joystick",
	});
}

export default Component;
