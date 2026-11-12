import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqvr0v2ea.css';
import '../../css/u/uuehjku7c.css';
import '../../css/o/obrbe1bus.css';
import '../../css/w/w-m7llbyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqvr0v2ea"/><path class="uuehjku7c"/><path class="obrbe1bus"/><path class="w-m7llbyo"/>`,
		"fallback": "selfhst:redmine",
	});
}

export default Component;
