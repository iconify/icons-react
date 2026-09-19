import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwcpvj2qt.css';
import '../../css/z/z0s33xbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kwcpvj2qt"/><path class="z0s33xbcs"/></g>`,
		"fallback": "hugeicons:playlist-01",
	});
}

export default Component;
