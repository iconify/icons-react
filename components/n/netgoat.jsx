import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5x5bmbqt.css';
import '../../css/a/axpn5ibac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5x5bmbqt"/><path class="axpn5ibac"/>`,
		"fallback": "selfhst:netgoat",
	});
}

export default Component;
