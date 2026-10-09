import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4d3-1mti.css';
import '../../css/a/ay8umis1r.css';
import '../../css/o/o49-qrbbn.css';
import '../../css/i/iu_u5m5mq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4d3-1mti"/><path class="ay8umis1r"/><path class="o49-qrbbn"/><path class="iu_u5m5mq"/>`,
		"fallback": "energy-icons:languages-20-bold",
	});
}

export default Component;
