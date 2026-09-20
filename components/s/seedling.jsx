import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/j3n1w1bxg.css';
import '../../css/m/mgueomwsx.css';
import '../../css/o/oja2hdbpd.css';
import '../../css/t/tb48ibf9h.css';
import '../../css/n/nay5jxljn.css';
import '../../css/m/mktd8cpap.css';
import '../../css/y/ybf6zy60q.css';
import '../../css/y/yhgw-qg9m.css';
import '../../css/k/kgvh9ip0i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="j3n1w1bxg"/><path class="mgueomwsx"/><path clip-rule="evenodd" class="oja2hdbpd"/><path class="tb48ibf9h"/><path clip-rule="evenodd" class="nay5jxljn"/></g><path clip-rule="evenodd" class="mktd8cpap"/><path clip-rule="evenodd" class="ybf6zy60q"/><path clip-rule="evenodd" class="yhgw-qg9m"/><path clip-rule="evenodd" class="kgvh9ip0i"/></g>`,
		"fallback": "pepicons-print:seedling",
	});
}

export default Component;
