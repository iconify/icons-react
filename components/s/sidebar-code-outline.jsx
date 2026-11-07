import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rurdy5bct.css';
import '../../css/y/yqbrdyu5x.css';
import '../../css/q/qse9eiber.css';
import '../../css/b/bslwnxr-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rurdy5bct"/><path class="yqbrdyu5x"/><path class="qse9eiber"/><path clip-rule="evenodd" class="bslwnxr-i"/>`,
		"fallback": "solar:sidebar-code-outline",
	});
}

export default Component;
