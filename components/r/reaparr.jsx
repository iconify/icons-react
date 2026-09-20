import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww8idsbap.css';
import '../../css/e/ez22n4eor.css';
import '../../css/l/lzt9bkbza.css';
import '../../css/h/hhsvjg6qz.css';
import '../../css/n/n7h3t2d2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww8idsbap"/><path class="ez22n4eor"/><path class="lzt9bkbza"/><path class="hhsvjg6qz"/><path class="n7h3t2d2d"/>`,
		"fallback": "selfhst:reaparr",
	});
}

export default Component;
