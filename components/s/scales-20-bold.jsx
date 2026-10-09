import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi9mw4qcx.css';
import '../../css/y/yz--wtxhz.css';
import '../../css/h/hubf0zbho.css';
import '../../css/b/bau81vnse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi9mw4qcx"/><path class="yz--wtxhz"/><path class="hubf0zbho"/><path class="bau81vnse"/>`,
		"fallback": "energy-icons:scales-20-bold",
	});
}

export default Component;
