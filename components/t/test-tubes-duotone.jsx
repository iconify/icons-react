import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhf70ccxw.css';
import '../../css/x/x1xy-s4bq.css';
import '../../css/t/t6olqxbaf.css';
import '../../css/w/wxsbvekmp.css';
import '../../css/x/xa835-m2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zhf70ccxw"/><path class="x1xy-s4bq"/><path class="t6olqxbaf"/><path class="wxsbvekmp"/><path class="xa835-m2f"/></g>`,
		"fallback": "lucide-extended:test-tubes-duotone",
	});
}

export default Component;
