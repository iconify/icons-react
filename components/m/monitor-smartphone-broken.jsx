import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fqqct-b5x.css';
import '../../css/r/rvg5dwd0q.css';
import '../../css/k/k4bytsftl.css';
import '../../css/h/hn0mec2mq.css';
import '../../css/v/v31cxj-zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fqqct-b5x"/><path class="rvg5dwd0q"/><path class="k4bytsftl"/><path class="hn0mec2mq"/><path class="v31cxj-zs"/></g>`,
		"fallback": "solar:monitor-smartphone-broken",
	});
}

export default Component;
