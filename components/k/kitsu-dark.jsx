import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/durrixbcc.css';
import '../../css/h/hf869sb1k.css';
import '../../css/h/hibcrvbqz.css';
import '../../css/h/hina6zh8z.css';
import '../../css/m/mq_a-6b-m.css';
import '../../css/q/qz7uzdb5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="durrixbcc"/><path class="hf869sb1k"/><path class="hibcrvbqz"/><path class="hina6zh8z"/><path class="mq_a-6b-m"/><path class="qz7uzdb5z"/>`,
		"fallback": "selfhst:kitsu-dark",
	});
}

export default Component;
