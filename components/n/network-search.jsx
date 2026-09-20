import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8zq3nb9u.css';
import '../../css/x/xw2i1re2n.css';
import '../../css/k/k2j__cbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n8zq3nb9u"/><path class="xw2i1re2n"/><path class="k2j__cbzc"/></g>`,
		"fallback": "streamline-ultimate:network-search",
	});
}

export default Component;
