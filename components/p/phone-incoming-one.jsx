import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ewvk809ug.css';
import '../../css/x/x57m2cc2n.css';
import '../../css/r/rknh_wb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ewvk809ug"/><path class="x57m2cc2n"/><path class="rknh_wb4q"/></g>`,
		"fallback": "icon-park:phone-incoming-one",
	});
}

export default Component;
