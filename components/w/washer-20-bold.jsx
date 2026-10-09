import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qebrtob4g.css';
import '../../css/e/exrhjpbkr.css';
import '../../css/s/skd1_2bqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qebrtob4g"/><path class="exrhjpbkr"/><path class="skd1_2bqw"/>`,
		"fallback": "energy-icons:washer-20-bold",
	});
}

export default Component;
