import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/chcorqbvh.css';
import '../../css/s/s0s2nybgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="chcorqbvh"/><path class="s0s2nybgx"/></g>`,
		"fallback": "icon-park:laptop-one",
	});
}

export default Component;
