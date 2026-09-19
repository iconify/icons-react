import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j3wgoubmz.css';
import '../../css/f/fonskebzw.css';
import '../../css/k/k_a-7jb4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j3wgoubmz"/><path class="fonskebzw"/><path class="k_a-7jb4j"/></g>`,
		"fallback": "icon-park-solid:mark",
	});
}

export default Component;
