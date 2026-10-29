import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jrw1k6dse.css';
import '../../css/h/hgi6tu1ll.css';
import '../../css/b/b2hy81big.css';
import '../../css/j/jbflvebur.css';
import '../../css/h/h_4g86b_w.css';
import '../../css/s/s9w7lzbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jrw1k6dse wm-shadow"/><path class="hgi6tu1ll"/><path class="b2hy81big"/><path class="jbflvebur"/><path class="h_4g86b_w wm-shine"/><path class="s9w7lzbzh wm-deco"/></g>`,
		"fallback": "withicons-sticker:undo",
	});
}

export default Component;
