import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv18c1b8p.css';
import '../../css/o/olyrocboy.css';
import '../../css/e/ef1turwgl.css';
import '../../css/z/z472j7n0q.css';
import '../../css/g/g48i-8bba.css';
import '../../css/s/sa0bisb_o.css';
import '../../css/p/pyzoqpb8p.css';
import '../../css/s/sqeuykh8t.css';
import '../../css/c/ckarz3bgl.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv18c1b8p"/><path class="olyrocboy"/><path class="ef1turwgl"/><path class="z472j7n0q"/><path class="g48i-8bba"/><path class="sa0bisb_o"/><path class="pyzoqpb8p"/><path class="sqeuykh8t"/><path class="ckarz3bgl"/>`,
		"fallback": "tabler-flags:kenya",
	});
}

export default Component;
