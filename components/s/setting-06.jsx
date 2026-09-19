import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s1yxiu6df.css';
import '../../css/d/dxsa01s_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s1yxiu6df"/><path class="dxsa01s_o"/></g>`,
		"fallback": "hugeicons:setting-06",
	});
}

export default Component;
