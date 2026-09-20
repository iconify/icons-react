import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up-sn382d.css';
import '../../css/l/lgkyivbzh.css';
import '../../css/v/v84wumqnt.css';
import '../../css/w/wwzdwz7wh.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/kbwhrxbwa.css';
import '../../css/w/wsg023cvr.css';
import '../../css/v/vlpdpmh7q.css';
import '../../css/i/iv9uu5qzf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="up-sn382d"/><path class="lgkyivbzh"/><circle class="v84wumqnt"/><path class="wwzdwz7wh"/><g class="brzn_0bpr"><rect class="kbwhrxbwa"/><path class="wsg023cvr"/><circle class="vlpdpmh7q"/><path class="iv9uu5qzf"/></g>`,
		"fallback": "openmoji:linkedin",
	});
}

export default Component;
