import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/o4ke3obnq.css';
import '../../css/u/ua5ldjbsh.css';
import '../../css/k/kv0y0ib6z.css';
import '../../css/h/hmjjl1bqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="o4ke3obnq"/><path class="ua5ldjbsh"/><path class="kv0y0ib6z"/><path class="hmjjl1bqf"/></g>`,
		"fallback": "icon-park:truck",
	});
}

export default Component;
