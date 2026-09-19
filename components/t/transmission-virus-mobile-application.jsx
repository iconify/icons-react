import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pq9ajpm0f.css';
import '../../css/n/ndda-4-on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pq9ajpm0f"/><path class="ndda-4-on"/></g>`,
		"fallback": "covid:transmission-virus-mobile-application",
	});
}

export default Component;
