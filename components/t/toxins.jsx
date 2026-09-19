import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b1t7nftqh.css';
import '../../css/x/xn7_fzb3m.css';
import '../../css/o/old3i1bqh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="b1t7nftqh"/><path class="xn7_fzb3m"/><path class="old3i1bqh"/></g>`,
		"fallback": "icon-park-outline:toxins",
	});
}

export default Component;
