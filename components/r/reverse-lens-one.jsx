import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tmngr6b0v.css';
import '../../css/j/jn2jlqbfe.css';
import '../../css/n/n0rx2i3tg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tmngr6b0v"/><path class="jn2jlqbfe"/><path class="n0rx2i3tg"/></g>`,
		"fallback": "icon-park-outline:reverse-lens-one",
	});
}

export default Component;
