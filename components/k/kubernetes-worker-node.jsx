import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meg60s_rr.css';
import '../../css/l/ljo2zo11h.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meg60s_rr"/><path class="ljo2zo11h"/><path class="x8r3bo3uc"/>`,
		"fallback": "carbon:kubernetes-worker-node",
	});
}

export default Component;
