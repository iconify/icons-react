import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7b81vbqj.css';
import '../../css/w/w_0bcbclm.css';
import '../../css/b/b-kn6cc_o.css';
import '../../css/e/eiz_f0bnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7b81vbqj"/><path class="w_0bcbclm"/><path class="b-kn6cc_o"/><path class="eiz_f0bnm"/>`,
		"fallback": "energy-icons:solar-farm-20-bold",
	});
}

export default Component;
