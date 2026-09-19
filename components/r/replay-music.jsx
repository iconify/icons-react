import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k0rtnybof.css';
import '../../css/i/i0l3zohuw.css';
import '../../css/l/l5j_gjbvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="k0rtnybof"/><path class="i0l3zohuw"/><path class="l5j_gjbvp"/></g>`,
		"fallback": "icon-park:replay-music",
	});
}

export default Component;
