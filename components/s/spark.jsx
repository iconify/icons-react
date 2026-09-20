import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt6hue7bl.css';
import '../../css/h/h50klb51r.css';
import '../../css/q/q9pd_y20i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt6hue7bl"/><path class="h50klb51r"/><path clip-rule="evenodd" class="q9pd_y20i"/>`,
		"fallback": "thesvg-color:spark",
	});
}

export default Component;
