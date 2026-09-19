import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kwy_kebgz.css';
import '../../css/x/xoug70gxr.css';
import '../../css/g/g8omeujsg.css';
import '../../css/y/y66t17biy.css';
import '../../css/j/jdf113i5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="kwy_kebgz"/><path class="xoug70gxr"/><path class="g8omeujsg"/><path class="y66t17biy"/><path class="jdf113i5g"/></g>`,
		"fallback": "icon-park:toolkit",
	});
}

export default Component;
