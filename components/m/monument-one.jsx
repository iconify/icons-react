import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/n0f-nfx6t.css';
import '../../css/u/ujo-o7bxq.css';
import '../../css/j/jil8u0uzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="n0f-nfx6t"/><path class="ujo-o7bxq"/><path class="jil8u0uzb"/></g>`,
		"fallback": "icon-park:monument-one",
	});
}

export default Component;
