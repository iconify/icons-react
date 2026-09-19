import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ofpqmfy_v.css';
import '../../css/y/y47odfb-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="ofpqmfy_v"/><path class="y47odfb-t"/></g>`,
		"fallback": "icon-park:star-one",
	});
}

export default Component;
