import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsbhltb8q.css';
import '../../css/u/ui1gjq2vy.css';
import '../../css/i/ieprg1yds.css';
import '../../css/t/tv5dm7bgg.css';
import '../../css/i/iy2ea7b5x.css';
import '../../css/x/xmf3m1b7p.css';
import '../../css/i/i1od1d0bu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsbhltb8q"/><path class="ui1gjq2vy"/><path class="ieprg1yds"/><path class="tv5dm7bgg"/><path class="iy2ea7b5x"/><path class="xmf3m1b7p"/><path class="i1od1d0bu"/>`,
		"fallback": "energy-icons:mangrove-20",
	});
}

export default Component;
