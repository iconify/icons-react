import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9xmkqhif.css';
import '../../css/p/p40hk-e5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b9xmkqhif"/><path class="p40hk-e5u"/></g>`,
		"fallback": "hugeicons:tap-03",
	});
}

export default Component;
