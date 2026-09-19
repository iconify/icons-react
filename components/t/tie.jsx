import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2pzyybat.css';
import '../../css/y/ylf10ib8g.css';
import '../../css/u/u-28vxq8s.css';
import '../../css/j/j9d0ksb9r.css';
import '../../css/i/i3xncmuba.css';
import '../../css/s/sn0-f5zcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2pzyybat"/><path class="ylf10ib8g"/><path class="u-28vxq8s"/><path class="j9d0ksb9r"/><path class="i3xncmuba"/><path class="sn0-f5zcu"/>`,
		"fallback": "fxemoji:tie",
	});
}

export default Component;
