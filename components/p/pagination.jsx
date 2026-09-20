import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk0u-ybaf.css';
import '../../css/x/xekl2mwvy.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk0u-ybaf"/><path class="xekl2mwvy"/>`,
		"fallback": "lineicons:pagination",
	});
}

export default Component;
