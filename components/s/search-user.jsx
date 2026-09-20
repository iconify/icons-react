import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4937g1yq.css';
import '../../css/e/etvrawbsd.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4937g1yq"/><path class="etvrawbsd"/><path class="vlzselbkt"/></g>`,
		"fallback": "mynaui:search-user",
	});
}

export default Component;
