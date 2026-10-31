import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3-a3w-3w.css';
import '../../css/f/ff8-diyhm.css';
import '../../css/t/t2w8mls_d.css';
import '../../css/y/yl4w1c0xq.css';
import '../../css/s/skt64dbpg.css';
import '../../css/i/i3yihv7dd.css';
import '../../css/q/q9wzo3fbv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3-a3w-3w"/><path class="ff8-diyhm"/><path class="t2w8mls_d"/><path class="yl4w1c0xq"/><path class="skt64dbpg"/><path class="i3yihv7dd"/><path class="q9wzo3fbv"/>`,
		"fallback": "tabler-flags:mexico",
	});
}

export default Component;
