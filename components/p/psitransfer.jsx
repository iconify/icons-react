import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpt1a073y.css';
import '../../css/h/hczeqh3lx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpt1a073y"/><path class="hczeqh3lx"/>`,
		"fallback": "selfhst:psitransfer",
	});
}

export default Component;
