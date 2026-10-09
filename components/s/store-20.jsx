import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srz9trb8w.css';
import '../../css/q/q7kl_vwvo.css';
import '../../css/p/pw06uvqua.css';
import '../../css/y/ydi-f-b6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srz9trb8w"/><path class="q7kl_vwvo"/><path class="pw06uvqua"/><path class="ydi-f-b6n"/>`,
		"fallback": "energy-icons:store-20",
	});
}

export default Component;
