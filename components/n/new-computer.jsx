import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lkuvn8t3r.css';
import '../../css/g/g3d0sd4xn.css';
import '../../css/r/rcncnkwrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="lkuvn8t3r"/><path class="g3d0sd4xn"/><path class="rcncnkwrd"/></g>`,
		"fallback": "icon-park:new-computer",
	});
}

export default Component;
