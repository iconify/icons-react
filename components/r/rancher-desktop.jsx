import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6w23hbvq.css';
import '../../css/l/luh2gib-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6w23hbvq"/><path class="luh2gib-h"/>`,
		"fallback": "selfhst:rancher-desktop",
	});
}

export default Component;
