import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6nirbah.css';
import '../../css/y/yjey4tfxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6nirbah"/><path class="yjey4tfxg"/>`,
		"fallback": "flat-color-icons:ruler",
	});
}

export default Component;
