import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/s/spw2debce.css';
import '../../css/p/pq9ca_b8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="spw2debce"/><path class="pq9ca_b8q"/></g>`,
		"fallback": "icon-park-outline:panties",
	});
}

export default Component;
