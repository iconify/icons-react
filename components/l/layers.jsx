import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/ip4ipmvam.css';
import '../../css/l/l_uwyotix.css';
import '../../css/o/osg7oyyxp.css';
import '../../css/y/ygqxc_f9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ip4ipmvam"/><path class="l_uwyotix"/><path class="osg7oyyxp"/><path class="ygqxc_f9g"/></g>`,
		"fallback": "icon-park:layers",
	});
}

export default Component;
