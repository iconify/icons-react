import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsue9y5zg.css';
import '../../css/s/sfzd15p1h.css';
import '../../css/z/zc__otrgv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsue9y5zg"/><path class="sfzd15p1h"/><path class="zc__otrgv"/>`,
		"fallback": "ep:place",
	});
}

export default Component;
